import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import constants from '../const/Constants';
import Color from '../utils/Colors';

const MyHeader = (props) => {
    const { style = {}, onPressLeft, imageLeft, title='Header',
            onPressRight, imageRight,
         } = props

    return (
        <View style={[styles.button, style]}>
            <View style={ styles.ButtonLeft}>
                <TouchableOpacity onPress={onPressLeft} >
                    <Image
                        source={imageLeft}
                        style={styles.Image1style}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.titleView}>
              <Text style={{fontSize : 16,fontWeight:'bold'}}>{title}</Text>
            </View>
            <View style={styles.ButtonRight}>
                <TouchableOpacity onPress={onPressRight} >
                    <Image
                        source={imageRight}
                        style={styles.Image1style}
                    />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: constants.headerHeight,
        width: constants.screenWidth,
        //justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor : Color.white
    },
    Image1style: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch'
    },
    ButtonLeft :{
        margin : 10,
        marginHorizontal : 15,
    },
    titleView :{
        margin : 11,
        width : constants.screenWidth - 155,
        justifyContent : 'center',
        padding : 5,
        alignItems :'center'
    },
    ButtonRight :{
        margin : 10,
        marginHorizontal : 10,
    }
})

export default MyHeader;