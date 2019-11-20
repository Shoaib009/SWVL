import React,{StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    top: {
        height: '45%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:"#bdc3c7"
    },
    profileImage:{
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth:4,
        borderColor:"#fff",
        backgroundColor:"#00b894"
    },
    imageStyle:{
        width:130,
        height:130,
        borderRadius:100
    },
    imageStyle1:{
        width:"100%",
        height:"100%"
    },
    center: {
        height: '10%',
        backgroundColor:"#2d3436"
    },
    bottom:{
        height:'45%',
        backgroundColor:'#ff7675',
        flexDirection:"row",
        flexWrap:"wrap",
        padding:5
    },
    bottomItems:{
        width:"50%",
        height:"50%",
        padding:5
    },
    bottomItemsInner:{
        flex:1,
        backgroundColor:"#ecf0f1"
    }
})