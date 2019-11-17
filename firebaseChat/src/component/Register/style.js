import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    headingStyle: {
        color: '#EA384D',
        fontSize: 32,
        fontFamily: 'regular',
        fontWeight: 'bold',
        marginVertical: 20,
        marginHorizontal: 20
    },
    labelStyle: {
        color: '#000000',
        fontFamily: 'regular',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 5
    },
    inputStyle: {
        width: 360,
        height: 44,
        borderRadius: 25,
        backgroundColor: "#E7EBEE",
        marginHorizontal: 20,
        paddingLeft: 25
    },
    inputStyleOne: {
        width: 150,
        height: 44,
        borderRadius: 25,
        backgroundColor: "#E7EBEE",
        marginHorizontal: 20,
        paddingLeft: 25
    },
    btnStyle: {
        width: 360,
        height: 44,
        borderRadius: 25,
        backgroundColor: "#E52A3F",
        alignItems: 'center',
        marginTop: 35,
        marginBottom:12,
        justifyContent: 'center',
        fontFamily: 'regular',
        marginHorizontal: 20
    },
    btnStyleOne: {
        width: 360,
        height: 44,
        borderRadius: 25,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'regular',
        marginHorizontal: 20,
        marginBottom: 1
    },
    btnText: {
        color: '#ffffff',
        fontFamily: 'regular',
        fontSize: 16,
    },
    btnTextOne: {
        color: '#000000',
        fontFamily: 'regular',
        fontSize: 14,
        opacity: 0.9
    },
    txtColor:{
        color: '#E52A3F',
        fontFamily: 'regular',
        fontSize: 14,
        opacity: 0.9,
        fontWeight:'bold'
    },
    ContainerThree: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        //marginBottom: 25
    },
    footerTextStyle: {
        color: '#E52A3F',
        opacity: 0.5
    },
    ContainerTwo: {
        flex: 1,
        flexDirection: 'row',
        //marginBottom: 20

    },
    inputWrap: {
        flex: 1,
        borderColor: "#ffffff",
        borderBottomWidth: 1,
        marginBottom: 5
    }

})