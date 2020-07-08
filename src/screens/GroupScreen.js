import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import ButtonWithBackGround from '../components/ButtonWithBackGround';
import images from '../const/Images';
import { Header } from 'react-native/Libraries/NewAppScreen';
import MyHeader from '../components/Header';
import GroupItems from '../components/GroupItems';
import UserItems from '../components/UserItems';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
function GroupScreen({ navigation }) {
    const [groups, setGroups] = useState([]);
    var userID =auth().currentUser.email
    useEffect(() => {
        console.log('uppercase',userID[0].toUpperCase() + userID.slice(1));
        getChats();
    }, []);
    async function getChats() {
        const db = firestore()
        var groupArray = []
        await db.collection("groups")
            .onSnapshot(function (snapshot) {
                snapshot.docChanges().forEach(function (change) {
                  
                    if (change.type == "added") {
                        console.log("New Group==>", change.doc.data())
                        if (change.doc.data()["userEmail"] !== userID[0].toUpperCase() + userID.slice(1)) {
                            groupArray.push(change.doc.data())
                        }
                    }

                    if (change.type === 'modified') {
                        console.log("Modified Group : ", change.doc.data())
                    }
                    if (change.type === "removed") {
                        console.log("Removed Group ", change.doc.data())
                    }

                    setGroups(groupArray)
                })
            })
    }

    return (

        <View style={styles.container}>
            <MyHeader title='Group Page'
                imageLeft={images.logout} onPressLeft={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "SignUpPage" }]
                    })
                }}
                imageRight={images.add_icon} onPressRight={() => { navigation.navigate('AddGroupPage') }}
            />
            {console.log('GROUPSSSS',groups)}
            <FlatList
                data={groups}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            item.groupID === undefined ?
                                navigation.navigate('UserChatPage', {
                                    item
                                })
                                :
                                navigation.navigate('ChatPage', {
                                    item
                                })
                        }}>
                            <GroupItems item={item} />
                        </TouchableOpacity>
                    )
                }}
            >
            </FlatList>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttonstyle: {
        backgroundColor: 'red'
    }
})

export default GroupScreen;