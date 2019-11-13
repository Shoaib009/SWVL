import React, { Component } from 'react'
import { Text, View,Image, TouchableOpacity } from 'react-native'
import styles from './style'
import logo from '../images/logo2.jpg'
export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.ContainerOne}>
            <View style={styles.Container}>
                <Image style={styles.logoStyle} source={logo} />
                <Text >
                <Text style={styles.textStyle}>SEWAA </Text>
                {"\n"}
                <Text style={styles.textStyleOne}>Rental Made Easy </Text> 
                {"\n"}
                </Text>
                </View>
                <View style={styles.ContainerTwo}>
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.btnText}> Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.btnText}> Login</Text>
                </TouchableOpacity>
            
            </View>
            <View style={styles.ContainerThree}>
                <Text style={styles.footerTextStyle}>
                    Sewaa Apps v1.0
                </Text>
            </View>
            </View>
        )
    }
}
