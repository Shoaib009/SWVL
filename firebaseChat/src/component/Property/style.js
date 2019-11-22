import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    head: {
        height: "10%",
        backgroundColor:"#fff",
        flexDirection:"row",
        flexWrap:"wrap"
    },
    heading: {
        color:"#EA384D",
        fontFamily: "regular",
        fontSize: 25,
        fontWeight: "bold",
        marginTop:"4%",
        marginLeft:"35%"
    },
    iconStyle:{
        color: "#EA384D",
        marginTop:"5%",
        marginLeft:"30%"
    },
    iconStyle1:{
        color: "#EA384D",
        marginTop:"5%",
        marginLeft:"0%"
    },
    body:{
        height: "40%",
        backgroundColor:"#fff",
    },
    bodyItems:{
        width:"100%",
        height:"100%",
        paddingHorizontal:15
    },
    bodyItemsInner:{
        flex:1,
    },
    imageStyle:{
        width:"100%",
        height:"100%",
        borderRadius:25
    },
    center:{
        height:"8%",
        backgroundColor:"#fff",
        flexDirection:"row",
        flexWrap:"wrap"
    },
    centerLeft:{
        width:"50%",
        alignItems:"center",
        justifyContent:"center"
    },
    btnTxtStyle:{
        fontFamily:"regular",
        fontWeight:"bold",
        fontSize:16,
        color:"#EA384D",
        marginTop:"4%"
    },
    btnTxtStyle1:{
        fontFamily:"regular",
        fontWeight:"bold",
        fontSize:12,
        color:"#EA384D",
        marginTop:"4%",
        marginLeft:"15%"
    },
    btnStyle:{
        flex:1,
        backgroundColor:"#000"
    },
    downIcon:{
        color:"#EA384D",
        marginLeft:"55%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    bottom:{
        height:"35%",
        backgroundColor:"#120120"
    }
})