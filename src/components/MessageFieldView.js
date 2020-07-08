import React from 'react';
import { View, TextInput, Text, StyleSheet,Button,ScrollView } from 'react-native';
import Color from '../utils/Colors';
import constants from '../const/Constants';
import ButtonWithBackGround from '../components/ButtonWithBackGround';
//import Button from '../components/Button';
import Strings from '../const/Strings';

const MessageFieldView = ({ terms, placeHolder, onTermChange, onValidateTextField, error, onSubmit, isJoined }) => {
    return (
        <View style={styles.containerView}>
            <View style={styles.fieldView}>
                <TextInput
                    autoCorrect={false}
                    style={styles.textField}
                    value={terms}
                    placeholder={placeHolder}
                    onChangeText={onTermChange}
                    onEndEditing={onValidateTextField}
                />
                <View style={styles.ButtonView}>
                  <Button title={Strings.Send} style={styles.buttonStyle} onPress={onSubmit} />
                </View>
            
                   {/* <Button title={Strings.Send} style={styles.buttonStyle} onPress={onSubmit} /> */}
         
               
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    containerView: {
        backgroundColor: Color.white,
        width: constants.screenWidth,
        flex: 1,
        justifyContent: 'center'
    },
    fieldView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Color.green
    },
    textField: {
        fontSize: 14,
        flex: 1,
        marginRight: 10,
        paddingLeft: 10,
        width: '75%',
        borderColor: Color.blue,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: Color.smoke
    },
    ButtonView: {
        alignSelf: 'center',
        width: '25%',
        height: '100%',
        justifyContent :'center'
    },
    buttonStyle: {
        color: Color.white
    }
})

export default MessageFieldView;