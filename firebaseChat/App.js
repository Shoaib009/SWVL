import React,{Component} from 'react'
import Home from './src/component/Home'
import ProfileInfo from './src/component/ProfileInfo'
import SignIn from './src/component/SignIn'
import SignUp from './src/component/SignUp'
import {createStackNavigator} from 'react-navigation'
import SplashScreen from './src/component/SplashScreen'

 
class App extends Component{
  constructor(){
    super()
    state = {}
  }
  
  render(){
    return(
      // <Router>
      //   <Scene key="root">
      //     <Scene key="home" component={Home} title="First Screen" initial={true}/>
      //     <Scene key="about" component={About} title="Second Screen"/>
      //   </Scene>
      // </Router>
      <AppStackNavigator />
    )
  }
}

const AppStackNavigator = createStackNavigator({
  home: Home,
  splash: SplashScreen,
  login : SignIn,
  signUp: SignUp, 
  profile: ProfileInfo, 
},
{ headerMode: 'none' })

export default App;