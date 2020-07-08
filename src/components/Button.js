import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Color from '../utils/Colors'

const Button = (props) => {
    const { title = 'Enter', style = {}, testStyle = {}, onPress, isLoading } = props
    const loader = () => {
        return (
            <ActivityIndicator animating={isLoading} />
        )
    } 
    const button = () => {
        return (
            <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
                <Text style={[styles.text, testStyle]}>{title}</Text>
            </TouchableOpacity>
        );
    }

    return (
        
        <View style={[styles.button, style]}>
            {isLoading ? loader() : button()}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 59,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: Color.blue,
        shadowColor: Color.blue,
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 10 },
        shadowRadius: 20
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: Color.white
    }
})

export default Button;