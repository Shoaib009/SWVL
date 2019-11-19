import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './style'
import pic from "../images/cr1.jpg"
import pic1 from "../images/man.jpg"
import pic2 from "../images/cell.png"
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, View, } from 'native-base';
export default class Details extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Container>
                    <Header transparent>
                        <Left>
                            <Button transparent>
                                <Icon style={styles.iconStyle} name='arrow-back' />
                                {/* <Text>Back</Text> */}
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.heading}>Details</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon style={styles.iconStyle} name='add-circle' />
                                {/* <Text>Cancel</Text> */}
                            </Button>
                        </Right>
                    </Header>
                </Container>
                <Image style={styles.imgStyle} source={pic} />
                <View style={styles.container1}>
                    <Image style={styles.imgStyle1} source={pic1} />
                    <Text><Icon style={styles.iconStyle} name='person' />
                        <Text style={styles.txtStyle}>  Tanent Name : <Text style={styles.txtStyle1}> Muhammad Shoaib</Text>
                        </Text>
                        <Text>{"\n"}</Text>

                        <Icon style={styles.iconStyle} name='clock' />
                        <Text style={styles.txtStyle}>  Duration : <Text style={styles.txtStyle1}> 10 Months</Text>
                        </Text>
                        <Text>{"\n"}</Text>

                        <Icon style={styles.iconStyle} name='cash' />
                        <Text style={styles.txtStyle}>  Rent : <Text style={styles.txtStyle1}> $100/month</Text>
                        </Text>
                        <Text>{"\n"}</Text>

                        <Icon style={styles.iconStyle} name='wallet' />
                        <Text style={styles.txtStyle}>  Rent paid on : <Text style={styles.txtStyle1}> June 20, 2018</Text>
                        </Text>
                    </Text>
                </View>
                <View style={styles.container2}>
                    <Button style={styles.btnStyle} iconRight light>
                        <Text style={styles.btnText}>View Agreement</Text>
                        <Icon style={styles.iconStyle1} name='arrow-forward' />
                    </Button>
                </View>
                <View style={styles.container3}>
                    <Text>
                    <Text style={styles.heading1}>Mark Villas</Text><Text>{"\n"}</Text>
                    <Text>Rental Date : 5th Monthly</Text><Text>{"\n"}</Text>
                    <Text>Block 12, Level 6, Unit 9</Text><Text>{"\n"}</Text>
                    <Text>Rent Due : 20 April 2018</Text>
                    </Text>
                    <Button style={styles.btnStyle1}>
                        <Text style={styles.btnText1}>Vacant</Text>
                    </Button>
                </View>
                <View style={styles.container1}>
                <Image style={styles.imgStyle2} source={pic2}/>
                </View>
            </View>
        )
    }
}
