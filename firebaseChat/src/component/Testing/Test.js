import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './style'
import pic from '../images/man.jpg'
import pic1 from '../images/cr1.jpg'
import pic2 from '../images/cr2.jpg'
import pic3 from '../images/cr3.jpg'
import pic4 from '../images/cr4.jpg'

export default class Test extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.profileImage}>
                        <Image style={styles.imageStyle} source={pic}/>
                    </View>
                </View>
                <View style={styles.center}></View>
                <View style={styles.bottom}>
                    <View style={styles.bottomItems}>
                        <View style={styles.bottomItemsInner}>
                        <Image style={styles.imageStyle1} source={pic1}/>
                        </View>
                    </View>
                    <View style={styles.bottomItems}>
                        <View style={styles.bottomItemsInner}>
                        <Image style={styles.imageStyle1} source={pic2}/>
                        </View>
                    </View>
                    <View style={styles.bottomItems}>
                        <View style={styles.bottomItemsInner}>
                        <Image style={styles.imageStyle1} source={pic3}/>
                        </View>
                    </View>
                    <View style={styles.bottomItems}>
                        <View style={styles.bottomItemsInner}>
                        <Image style={styles.imageStyle1} source={pic4}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
