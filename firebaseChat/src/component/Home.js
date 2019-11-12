import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
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
          
          <Button rounded style={styles.btnStyle}>
             <Text style={styles.textStyle}>
                Register
             </Text>
          </Button>
          <Button rounded style={styles.btnStyle}>
             <Text style={styles.textStyle}>
                Login
             </Text>
          </Button>
        </Content>
        <View style={styles.footerStyle}>
             
          <Text style={styles.footerTextStyle}>Sewaa Apps v1.0</Text>
         
          </View>
      </Container>
            // </View>
      )
   }
}

const styles = StyleSheet.create({
   Container: {
      flex: 1,
      backgroundColor: "#EA384D",
      //alignItems: 'center',
   },
   textStyle: {
      color: '#EA384D',
      fontSize: 18,
      fontWeight: 'bold'
     
   },
   btnStyle: {
      justifyContent: 'center',
      margin:15,
      backgroundColor: 'white'
   },
   logoTextStyle: {
      textAlign: 'center',
      fontSize: 45,
      color: "#ffffff",
      marginTop: 75
   },
   logoTextStyleone:{
      textAlign: 'center',
      fontSize: 18,
      color: "#ffffff",
      marginBottom: 75,
      opacity: 0.5
   },
   footerStyle: {
      backgroundColor:'#EA384D', 
      flexDirection: 'row',
      alignSelf: 'center'
   },
   footerTextStyle: {
      color: 'white',
      opacity: 0.5,
   }

})

export default Home;
