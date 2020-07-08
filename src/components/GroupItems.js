import React from 'react';
import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import constants from '../const/Constants';
import images from '../const/Images';
import Color from '../utils/Colors';

function GroupItems({ item }) {
    const userId = item.groupID;

    return (
        <View>
            
            <View style={styles.container}>
                {
                    userId === undefined ?
                        <Image source={images.user} style={styles.ImageView} />
                        :
                        <Image source={images.group} style={styles.ImageView} />

                }
                <View style={{ justifyContent: 'center' }}>
                    {
                        userId === undefined
                            ?
                            <Text style={styles.groupTitle}>{item.userEmail}</Text>
                            :
                            <Text style={styles.groupTitle}>{item.groupName}</Text>
                    }

                </View>
            </View>
       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        width: constants.screenWidth,
        margin: 10,
    },
    descriptionContainer: {
        margin: 5,
    },
    ImageView: {
        width: 40,
        height: 40,
        borderRadius: 20,
        shadowColor: Color.blue,
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 2,
        backgroundColor: Color.Darkwhite
    },
    groupTitle: {
        color: Color.black,
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    separator: {
        height: 0.5,
        width: constants.screenWidth,
        backgroundColor: Color.blue
    },
    groupMembers: {
        color: Color.smoke,
        fontSize: 14
    }
})

export default GroupItems;