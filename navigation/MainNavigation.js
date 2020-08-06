import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/HomeScreen'
import SignIn from '../screens/SignInScreen'
import SignUp from '../screens/SignUpScreen'
import ParentDashHomeScreen from '../screens/ParentDashHomeScreen'
import KidsCategoriesScreen from '../screens/KidsCategoriesScreen'
import KidsCategoryVideosScreen from '../screens/KidsCategoryVideosScreen'
import PlayVideoScreen from '../screens/PlayVideoScreen'
import SelectVideoScreen from '../screens/SelectVideoScreen'

const MainNav = createStackNavigator({
  SelectVideoScreen,
  ParentDashHomeScreen,
  
  KidsCategoryVideosScreen,
  
  KidsCategoriesScreen,
  PlayVideoScreen,
  //HomeScreen, 
  
  
  
 
    
  
  SignIn,
  SignUp,
    
  Home, 
       
})

export default createAppContainer(MainNav)