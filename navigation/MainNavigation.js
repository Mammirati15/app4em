import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/HomeScreen'
import SignIn from '../screens/SignInScreen'
import SignUp from '../screens/SignUpScreen'

const MainNav = createStackNavigator({
  Home, 
  SignUp,
  SignIn
})

export default createAppContainer(MainNav)