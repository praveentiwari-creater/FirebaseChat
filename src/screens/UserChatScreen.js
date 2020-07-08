import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity,ScrollView } from 'react-native';
import MyHeader from '../components/Header';
import images from '../const/Images';
import MessageFieldView from '../components/MessageFieldView';
import Color from '../utils/Colors';
import constants from '../const/Constants';
import Strings from '../const/Strings';
import MessageItems from '../components/MessageItem';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



const UserChatScreen = ({ route, navigation }) => {

    const [messageList, setMessageList] = useState([])
    const [message, setMessage] = useState('')
    const [isAdded, setIsAdded] = useState(true)
    var items = route.params.item;
    var userMail = auth().currentUser.email;
    const userID = auth().currentUser.uid;
    //console.log(userID);
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    useEffect(() => {
        // console.log('Routeeeeee',route);
        console.log(time);
        getMessages()
    }, [])


    
    function getMessages() {
        const db = firestore() //where("receiverEmail",'==', items.userEmail)
        var messages=[] 
        //.where("senderEmail",'==',userMail[0].toUpperCase()+userMail.slice(1))
         //.where("receiverEmail",'==',userMail[0].toUpperCase()+userMail.slice(1))
        db.collection("message").where("receiverEmail",'==', items.userEmail)
        // db.collection("message").where("receiverEmail",'==', userMail)
        .onSnapshot(function (snapshot) {
            snapshot.docChanges().forEach(function (changes) {
                if (changes.type === "added") {
                    console.log("New message====>", changes.doc.data())
                    messages.push(changes.doc.data())
                }
                if (changes.type === "modified") {
                    console.log("modified message", changes.doc.data())
                     messages.push(changes.doc.data())
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
        const MessageRef = firestore().collection("message").doc()
        const userEmail = auth().currentUser.email
        MessageRef.set({
            messageID : MessageRef.id,
            message : message,
            senderId : userID,
            senderEmail : userEmail,
            receiverId :items.userID,
            receiverEmail : items.userEmail,
            timestemp : time
        }).then(function(docRef){
            setMessage("");
            console.log("Document written with id ", MessageRef.id);
           
        }).catch(function(error){
             Alert.alert(error.message)
             console.log("Error ",error)
        })
    }
   
    return (
     
        <View style={{ flex: 1 }}>
            {/* { console.log('iiiiiiiiiii=>',messageList)} */}
            <MyHeader title={items.userEmail}
                imageLeft={images.back} onPressLeft={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "GroupPage" }]
                    })
                }}
               
            />
          
    
            <View style={styles.container}>
                
                <FlatList
                    style={styles.flatlistStyle}
                    data={messageList}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {

                            }}
                            >
                                <MessageItems item={item} />
                            </TouchableOpacity>
                        )
                    }}
                />
 
                <View style={styles.messageFieldView}>

                    {isAdded ?
                        <MessageFieldView terms={message} placeHolder={Strings.TypeYourmsg}
                            onTermChange={messgae => setMessage(messgae)}
                            onSubmit={sendMessagesToChat}
                        />
                        :
                        <View style={styles.NotFriend}>
                            <TouchableOpacity>
                                <Text>ADD FRIEND</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                
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
    },
    NotFriend: {
        height: constants.footerHeight,
        width: constants.screenWidth,
        backgroundColor: Color.blue,
        justifyContent: 'center',
        alignItems: 'center'
    }
})



export default UserChatScreen;