import React, { Component } from 'react'
import { Text, View,TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

export default class Confirmation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headingStyle}>Confirmation </Text>
                <Text style={styles.txtStyle}>
                    Code message has been sent to your phone number,
                    and submit OTP code below to verify your account.
                </Text>
                <Text style={styles.labelStyle}>OTP CODE :</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="741-8523-9658"
                />
                 <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
                <View style={styles.ContainerThree}>
                <TouchableOpacity style={styles.btnStyleOne}>
                    <Text style={styles.btnTextOne}> Didn't received any message?
                    <Text style={styles.spanStyle}>Resend Code</Text></Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
