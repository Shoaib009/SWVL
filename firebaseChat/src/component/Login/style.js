import React, {StyleSheet} from 'react-native'

export default StyleSheet.create({
Container: {
    flex: 1,
    backgroundColor: '#ffffff'
},
headingStyle: {
    color: '#EA384D',
    fontSize: 40,
    fontFamily: 'regular',
    fontWeight: 'bold',
    marginVertical: 45,
    marginHorizontal: 10
},
labelStyle: {
    color: '#000000',
    fontFamily: 'regular',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 5
},
inputStyle :{
    width: 360,
    height: 50,
    borderRadius: 25, 
    backgroundColor:"#E7EBEE",
    marginHorizontal: 20,
    paddingLeft:25
},
btnStyle: {
    width: 360,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E52A3F",
    alignItems: 'center',
    marginVertical: 20,
    justifyContent: 'center',
    fontFamily: 'regular',
    marginHorizontal:20
},
btnStyleOne: {
    width: 360,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    //marginVertical: 30,
    justifyContent: 'center',
    fontFamily: 'regular',
    marginHorizontal:20
},
btnText: {
    color: '#ffffff',
    fontFamily: 'regular',
    fontSize: 16,
    //fontWeight: 'bold'
},
btnTextOne: {
    color: '#E52A3F',
    fontFamily: 'regular',
    fontSize: 16,
    //fontWeight: 'bold',
    opacity:0.9
},
ContainerThree: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    //marginBottom: 25
},
footerTextStyle: {
    color: '#E52A3F',
    opacity: 0.5
}
});