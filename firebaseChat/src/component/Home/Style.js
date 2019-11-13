import React, {StyleSheet} from 'react-native'

export default StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: "#EA384D",
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
});