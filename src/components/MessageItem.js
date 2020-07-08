import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import constants from '../const/Constants';
import images from '../const/Images';
import Color from '../utils/Colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function MessageItems({ item }) {
    const userID =auth().currentUser.uid
    function messageView() {
        if (userID === item.senderId) {
            return (
                <View style={styles.otherMessageContainerView}>
                    <Text style={[styles.senderName, { textAlign: 'right' }]}>{item.senderEmail}</Text>
                    <Text style={[styles.message, { textAlign: 'right' }]}>{item.message}</Text>
                    <Text style={[styles.timeview, { textAlign: 'right' }]}>{item.timestemp}</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.MyMessageContainerView}>
                    <Text style={styles.senderName}>{item.senderEmail}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                    <Text style={styles.timeview}>{item.timestemp}</Text>
                </View>
            )
        }
    }
    return (
        messageView()
    )
}

const styles = StyleSheet.create({
    otherMessageContainerView: {
        width: constants.screenWidth - 50,
        backgroundColor: Color.Gray,
        borderRadius: 5,
        marginLeft: 25,
        marginTop: 5,
        marginBottom: 5,
        padding: 10
    },
    MyMessageContainerView: {
        width: constants.screenWidth - 50,
        backgroundColor: Color.Gray,
        borderRadius: 5,
        margin: 5,
        padding: 10
    },
    senderName: {
        color: Color.white,
        fontSize: 14,
        fontWeight: 'bold'
    },
    message: {
        color: Color.white,
        fontSize: 14,
    },
    timeview :{
        fontSize : 10,
        color: Color.white,
    }
})

export default MessageItems;