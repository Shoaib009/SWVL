import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import styles from './style'
export default class Register extends Component {
    render() {
        return (

            <ScrollView style={styles.container}>
                <Text style={styles.headingStyle}>Register </Text>
               <View style={styles.ContainerTwo}>
                   <View style={styles.inputWrap}>
                <Text style={styles.labelStyle}>FIRST NAME :</Text>
                <TextInput
                    style={styles.inputStyleOne}
                    placeholder="Muhammad"
                />
                </View>
                <View style={styles.inputWrap}>
                <Text style={styles.labelStyle}>LAST NAME :</Text>
                <TextInput
                    style={styles.inputStyleOne}
                    placeholder="Ahmed"
                    
                />
                </View>
                </View>
                <Text style={styles.labelStyle}>COUNTRY :</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="MALAYSIA"
                />
                <Text style={styles.labelStyle}>EMAIL :</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="david@gmail.com"
                    
                />
                 <Text style={styles.labelStyle}>MOBILE :</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="646-785-7894"
                />
                <Text style={styles.labelStyle}>PASSWORD :</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="************"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyleOne}>
                    <Text style={styles.btnTextOne}>By Sign up you agree out
                    <Text style={styles.txtColor}>  Terms and Conditions.</Text></Text>
                </TouchableOpacity>
                <View style={styles.ContainerThree}>
                <TouchableOpacity style={styles.btnStyleOne}>
                    <Text style={styles.btnTextOne}> Already have an account?
                    <Text style={styles.txtColor}> Login</Text></Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
