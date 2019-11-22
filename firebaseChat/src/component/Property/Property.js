import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, View, Content, } from 'native-base';
import styles from './style'
import pic from '../images/gar.jpg'
export default class Property extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Text>/*head container*</Text> */}
                <View style={styles.head}><Text style={styles.heading}>Property</Text>
                    <Icon style={styles.iconStyle} name="add-circle" />
                </View>

                {/* <Text>//body on which image is place ...2nd container</Text> */}
                <View style={styles.body}>
                    <View style={styles.bodyItems}>
                        <View style={styles.bodyItemsInner}>
                            <Image style={styles.imageStyle} source={pic} />
                        </View>
                    </View>
                </View>
                {/* <Text>//3rd container...</Text> */}
                <View style={styles.center}>
                    <View style={styles.centerLeft}>
                     <Right>
                            <Button transparent>
                                <Text style={styles.btnTxtStyle}>Most Popular</Text>
                                <Icon style={styles.iconStyle1} name='arrow-down' />
                            </Button>
                        </Right>
                    </View>
                    <View style={styles.centerLeft}>
                     <Right>
                            <Button transparent>
                                <Text style={styles.btnTxtStyle1}>View More</Text>
                                <Icon style={styles.iconStyle1} name='arrow-down' />
                            </Button>
                        </Right>
                    </View>

                </View>
                {/* <Text>bottom div</Text> */}
                <View style={styles.bottom}>
                    
                </View>


            </View>
        )
    }
}
