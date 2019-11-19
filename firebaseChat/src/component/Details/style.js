import React, {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    container1: {
        flex: 1,
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom:10
    },
    container2: {
        flex: 1,
        backgroundColor: "#ffffff",
        marginVertical:10
    },
    container3:{
        flex: 1,
        backgroundColor: '#ffffff',
        marginHorizontal: 20,
        flexDirection: 'row',
    },
    heading: {
        color:"#EA384D",
        fontFamily: 'regular',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 75
    },
    heading1: {
        color:"#000",
        fontFamily: 'regular',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom:5
    },
    iconStyle: {
        color: '#EA384D',
        margin:5
    },
    iconStyle1:{
        color: '#fff',
        marginRight:30
    },
    imgStyle: {
        width: 350,
        height:180,
        borderRadius: 18,
        marginLeft: 30,
        marginBottom: 15
    },
    imgStyle1: {
        width: 90,
        height:90,
        borderRadius: 60,
        marginLeft: 20,
        marginRight: 10,
        marginTop: 10
    },
    imgStyle2: {
        width: 40,
        height:40,
        borderRadius: 45,
        // marginLeft: 20,
        // marginRight: 10,
         marginTop: 40
    },
    txtStyle:{
        color: "#000",
        fontFamily: 'regular',
        fontSize: 14,
    },
    txtStyle1:{
        color: "#000",
        fontFamily: 'regular',
        fontSize: 14,
        fontWeight: 'bold'
    },
    btnStyle:{
        width: 370,
        height: 50,
        backgroundColor: "#EA384D",
        borderRadius: 25,
        marginVertical:30,
        marginLeft:20
    },
    btnStyle1: {
        width: 90,
        height: 30,
        borderRadius: 25,
        backgroundColor: "#E52A3F",
        alignItems:'center',
        marginTop: 60,
        justifyContent:"center",
        fontFamily: 'regular',
        marginHorizontal:70,
        
    },
    btnText:{
        color: "#fff",
        fontFamily: "regular",
        marginLeft:15
    },
    btnText1: {
        color: '#ffffff',
        fontFamily: 'regular',
        fontSize: 12,
        textAlign: 'center'
    },
})