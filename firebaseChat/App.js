import React, { Component } from 'react'
//import Home from './src/component/Home/Home'
// import ProfileInfo from './src/component/Profile/ProfileInfo'
// import SignIn from './src/component/Login/SignIn'
// import SignUp from './src/component/Register/SignUp'
import { createStackNavigator } from 'react-navigation'
//import SplashScreen from './src/component/Splash/SplashScreen'
//import Register from './src/component/Register/Register'
//import Confirmation from './src/component/Confirmation/Confirmation'
import Property from './src/component/Property/Property'
import Details from './src/component/Details/Details'
import Test from './src/component/Testing/Test'
import Login from './src/component/Login/Login'



class App extends Component {
  constructor() {
    super()
    state = {}
  }

  render() {
    return (
      <AppStackNavigator />
    )
  }
}

const AppStackNavigator = createStackNavigator({
  //login: Login,
  property: Property,
  //test: Test,
  //detail : Details,
  // confirmation: Confirmation,
  //register: Register,
  // splash: SplashScreen,
  // login : SignIn,
  // signUp: SignUp, 
  // profile: ProfileInfo, 
},
  { headerMode: 'none' })

export default App;