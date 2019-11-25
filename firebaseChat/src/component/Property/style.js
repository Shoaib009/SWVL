import React, { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    head: {
        height: "10%",
        backgroundColor:"#EA384D",
        flexDirection:"row",
        flexWrap:"wrap",
        marginBottom:5
    },
    heading: {
        color:"#fff",
        fontFamily: "regular",
        fontSize: 25,
        fontWeight: "bold",
        marginTop:"4%",
        marginLeft:"35%"
    },
    iconStyle:{
        color: "#fff",
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
    // btnTxtStyle1:{
    //     fontFamily:"regular",
    //     fontWeight:"bold",
    //     fontSize:12,
    //     color:"#fff",
    // },
    btnStyle:{
        flex:1,
        backgroundColor:"#000"
    },
    btnStyle1:{
        width: 90,
        height: 30,
        borderRadius: 25,
        backgroundColor: "#E52A3F",
        alignItems:'center',
        justifyContent:"center",
        marginLeft:"20%",
        marginTop:48
    },
    downIcon:{
        color:"#EA384D",
        marginLeft:"55%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    bottom:{
        height:"32%",
        backgroundColor:"#f1f2f6",
        padding:5,
    },
    bottomItem:{
        padding:5,
        backgroundColor:"#fff",
        flexDirection:"row",
        flexWrap:"wrap",
        marginVertical:5,
        marginHorizontal:10
    },
    bottomItemHeading:{
        fontFamily:"regualr",
        fontSize:22,
        fontWeight:"bold",
        color:"#000"
    },
    bottomItemTxt:{
        fontFamily:"regualr",
        fontSize:18,
        color:"#000"
    },
    footer:{
        height:"13%",
        backgroundColor:"#f1f2f6",
        padding:5
    },
    footerItem:{
        padding:5,
        backgroundColor:"#fff",
        flexDirection:"row",
        padding:5
    },
    iconStyle2:{
        color:"#EA384D",
        marginHorizontal:20
    }
})