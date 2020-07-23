import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/HomeScreen'
import SignIn from '../screens/SignInScreen'
import SignUp from '../screens/SignUpScreen'

const MainNav = createStackNavigator({
  SignIn,
  SignUp,
  Home, 
       
})

export default createAppContainer(MainNav)