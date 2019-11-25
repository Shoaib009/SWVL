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
                                <Icon style={styles.iconStyle1} name='md-arrow-down' />
                            </Button>
                        </Right>
                    </View>

                </View>
                {/* <Text>bottom div</Text> */}
                <View style={styles.bottom}>
                    <View style={styles.bottomItem}>
                        <Text>
                        <Text style={styles.bottomItemHeading}>Mark Villas</Text><Text>{"\n"}</Text>
                        <Text style={styles.bottomItemTxt}>Renatl Date : 5th Monthly</Text><Text>{"\n"}</Text>
                        <Text style={styles.bottomItemTxt}>Block 12, Level 8, Unit 5</Text><Text>{"\n"}</Text>
                        <Text style={styles.bottomItemTxt}>Past date : 20 April 2018</Text>
                        </Text>
                        <Button style={styles.btnStyle1}>
                            <Text style={styles.btnTxtStyle2}>Vacant
                            </Text>
                        </Button>

                    </View>

                    <View style={styles.bottomItem}>
                        <Text>
                        <Text style={styles.bottomItemHeading}>Mark Villas</Text><Text>{"\n"}</Text>
                        <Text style={styles.bottomItemTxt}>Renatl Date : 5th Monthly</Text><Text>{"\n"}</Text>
                        <Text style={styles.bottomItemTxt}>Block 12, Level 8, Unit 5</Text><Text>{"\n"}</Text>
                        <Text style={styles.bottomItemTxt}>Past date : 20 April 2018</Text>
                        </Text>
                        <Button style={styles.btnStyle1}>
                            <Text style={styles.btnTxtStyle2}>Vacant
                            </Text>
                        </Button>
                         </View>
                    
                </View>
                {/* <Text>footer tab on the screen</Text> */}
                <View style={styles.footer}>
                    <View style={styles.footerItem}>
                        <Icon style={styles.iconStyle2} name="home"><Text>{"\n"}</Text>
                            <Text>Property</Text>
                        </Icon>
                        <Icon style={styles.iconStyle2} name="person"><Text>{"\n"}</Text>
                            <Text>Profile</Text>
                        </Icon>
                        <Icon style={styles.iconStyle2} name="md-text"><Text>{"\n"}</Text>
                            <Text>Message</Text>
                        </Icon>
                        <Icon style={styles.iconStyle2} name="settings"><Text>{"\n"}</Text>
                            <Text>Settings</Text>
                        </Icon>

                    </View>

                </View>


            </View>
        )
    }
}
