import React, {StyleSheet} from 'react-native';
export default StyleSheet.create({
Container : {
    flex: 1,
    backgroundColor: '#E52A3F',
    // alignItems: 'center',
    // justifyContent: 'center'
    flexDirection: 'row',
    marginTop: 65
    
},

textStyle: {
    fontFamily: 'regular',
    fontSize: 55,
    color: 'white',
},
textStyleOne: {
    fontSize: 22,
    color: '#F7687A',
    opacity: 0.2,
    fontWeight: 'bold'
    
},
logoStyle: {
    width:90,
    height: 90,
    borderRadius: 45,
    marginLeft: 35,
    marginRight: 3,
    marginTop: 13
},
btnStyle: {
    width: 280,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    marginTop: 15,
    alignItems:'center',
    justifyContent: 'center',
    fontFamily: 'regular',
    fontSize: 22
},
ContainerTwo: {
    flex: 1,
    backgroundColor: '#E52A3F',
    margin: 15,
    flexDirection: 'column',
    alignItems: 'center',

},
ContainerOne: {
    flex: 1,
    backgroundColor: '#E52A3F',
    flexDirection: 'column'
},
btnText: {
    color: '#E52A3F',
    fontFamily: 'regular',
    fontSize: 18,
    fontWeight: 'bold'
},
ContainerThree: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
},
footerTextStyle: {
    color: '#ffffff',
    opacity: 0.5
}

});