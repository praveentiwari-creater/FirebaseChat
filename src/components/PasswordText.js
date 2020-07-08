import React from 'react';
import {Text, View, StyleSheet,TextInput} from 'react-native';
import Color from '../utils/Colors';
import Constants from '../const/Constants';
const PasswordText = ({terms , placeholders , OnTermsChange , OnValidatePassword, error}) =>{
 return(
   <View>
       <Text style={styles.ErrorText}>{error}</Text>
       <View style={styles.TextFieldView}>
             <TextInput
              autoCorrect = {false}
              secureTextEntry
              style= {styles.TextField}
              placeholder = {placeholders}
              value={terms}
              onChangeText={OnTermsChange}
              onEndEditing={OnValidatePassword}
             />
       </View>
   </View>
 );
}

const styles = StyleSheet.create({
    TextField :{
        fontSize : 14,
        flex: 1,
        marginHorizontal : 20,
    },
    TextFieldView :{
        height : Constants.screenHeight * 0.06,
        width : Constants.screenWidth * 0.85,
        borderRadius : 10,
        marginTop : 5,
        marginBottom : 10,
        borderColor : Color.blue,
        borderWidth : 1,
        justifyContent : 'center',
        backgroundColor : Color.smoke
    },
    ErrorText : {
        fontSize : 12,
        color : 'red',
        marginBottom : -5,
        marginHorizontal : 20,
    }
})

export default PasswordText;