import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button, KeyboardAvoidingView, FlatList } from 'react-native';
import MessageFieldView from '../components/MessageFieldView';
import Color from '../utils/Colors';
import constants from '../const/Constants';
import Strings from '../const/Strings';
import MessageItems from '../components/MessageItem';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function ChatScreen({ route, navigation }) {
    const [messageList, setMessageList] = useState([])
    const [message, setMessage] = useState('')
    const [isJoined, setIsJoined] = useState(false)

    const { item } = route.params;
    const userID = auth().currentUser.uid;

    useEffect(() => {
        console.log(item)
        getUserJoinedAlreadyOrNot();
        getMessages();
    }, [])

    function getUserJoinedAlreadyOrNot(){
        firestore().collection("members").doc(item.groupID).collection("member").where("userID",'==', userID)
        .get().then(function(querySnapshot){
            if(querySnapshot.size > 0){
                querySnapshot.forEach(function(doc){
                    if(doc.data() != null){
                        setIsJoined(true)
                    }else{
                        setIsJoined(false)
                        showAlertToJoinGroup()
                    }
                })
            }else{
                showAlertToJoinGroup()
            }
        }).catch(function(error){
            console.log("Error getting doc :",error);
        })
    }


    function showAlertToJoinGroup(){
        Alert.alert(
            Strings.JoinChat,
            Strings.JoinChatConfirmMessage,
            [{
                text : 'Yes' , onPress : ()=>{
                    joinGroup()
                }
            },{
                text : 'No' , onPress : ()=>{
                    // navigation.reset({
                    //     index : 0,
                    //     routes : [{name : "GroupScreen"}]
                    // })   
                    setIsJoined(false)
                } 
            }
           ],
           {
               cancelable : false

           }
        )
    }
    

    function joinGroup(){
        const groupMemberRef = firestore().collection("members").doc(item.groupID).collection("member").doc()
        groupMemberRef.set({
            userID : userID,

        }).then(function(docRef){
            setIsJoined(true)
            Alert.alert(Strings.JoinMessage)
            setMessage('')
        }).catch(function(error){
            setIsJoined(false)
            Alert.alert(Strings.JoinGroupError)
        })
    }

    function getMessages() {
        const db = firestore()
        var messages = []

        db.collection("message").doc(item.groupID).collection("message")
            .onSnapshot(function (snapshot) {
            //    console.log('groupchat',snapshot)
                snapshot.docChanges().forEach(function (changes) {
                    // console.log('groupchat',changes)
                    if (changes.type === "added") {
                        console.log("New message", changes.doc.data())
                        messages.push(changes.doc.data())
                    }
                    if (changes.type === "modified") {
                        console.log("modified message", changes.doc.data())
                        // messages.push(changes.doc.data())
                    }
                    if (changes.type === "removed") {
                        console.log("Removed message", changes.doc.data())
                        // messages.push(changes.doc.data())
                    }
                    setMessageList(messages)
                })
            })

    }



    
    function sendMessagesToChat(){
        const MessageRef = firestore().collection("message").doc(item.groupID).collection("message").doc()
        const userEmail =auth().currentUser.email

        MessageRef.set({
            messageID : MessageRef.id,
            message : message,
            senderId : userID,
            senderEmail : userEmail
        }).then(function(docRef){
            setMessage("");
            console.log("Document written with id ", MessageRef.id);
           
        }).catch(function(error){
             Alert.alert(error.message)
             console.log("Error ",error)
        })
    }
    return (
 
            <View style={styles.container}>
                <FlatList
                 style={styles.flatlistStyle}
                 data={messageList}
                 keyExtractor={(item,index) => 'key'+ index}
                 renderItem={({item})=>{
                     return(
                         <TouchableOpacity onPress={()=>{

                         }} 
                         >
                         <MessageItems item={item} />
                         </TouchableOpacity>
                     )
                 }}
                />
                <View style={styles.messageFieldView}>

                    {isJoined ?
                      <MessageFieldView terms={message} placeHolder={Strings.TypeYourmsg} 
                      onTermChange={messgae => setMessage(messgae)}
                      onSubmit={sendMessagesToChat}
                      />
                      :
                      <MessageFieldView terms={message} placeHolder={Strings.TypeYourmsg} 
                      onTermChange={messgae => setMessage(messgae)}
                      onSubmit={()=>{Alert.alert("Please join The Group First")}} />
                    }
                  
                </View>
            </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    flatlistStyle: {
        marginBottom: 10,
        // flex: 0.9,
        flex: 1,
    },
    messageFieldView: {
        // flex: 0.1
        height:50
    }
})

export default ChatScreen;