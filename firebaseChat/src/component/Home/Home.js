import React, { Component } from 'react'
import { View,} from 'react-native'
import styles from './Style'
import { Container, Header, Content, Form, Item, Input, Label,Button,Text,Footer, FooterTab } from 'native-base';

export class Home extends Component {
   render() {
      return (
       
            <Container style={styles.Container}>
        
        <Content>
          
           
            <Text style={styles.logoTextStyle}>
               SEWAA
            </Text>
            <Text style={styles.logoTextStyleone}>
               Rental Made Easy
            </Text>
          
          <Button rounded style={styles.btnStyle} onPress={()=> this.props.navigation.navigate("signUp")}>
             <Text style={styles.textStyle}>
                Register
             </Text>
          </Button>
          <Button rounded style={styles.btnStyle} onPress={()=> this.props.navigation.navigate("login")}>
             <Text style={styles.textStyle}>
                Login
             </Text>
          </Button>
        </Content>
        <View style={styles.footerStyle}>
             
          <Text style={styles.footerTextStyle}>Sewaa Apps v1.0</Text>
         
          </View>
      </Container>
            
      )
   }
}


export default Home;
