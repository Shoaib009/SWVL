import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles from './style'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.headingStyle}> Login </Text>
                <Text style={styles.labelStyle}>YOUR EMAIL :</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="david@gmail.com"
                />
                <Text style={styles.labelStyle}>PASSWORD :</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="************"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyleOne}>
                    <Text style={styles.btnTextOne}>Can't login?Forgor Password!</Text>
                </TouchableOpacity>
                <View style={styles.ContainerThree}>
                <TouchableOpacity style={styles.btnStyleOne}>
                    <Text style={styles.btnTextOne}> Don't have an account?Register</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
