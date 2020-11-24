import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from './RootNavigation'

import Home from '../screens/HomeScreen'
import SignIn from '../screens/SignInScreen'
import SignUp from '../screens/SignUpScreen'
import ParentDashHomeScreen from '../screens/ParentDashHomeScreen'
import KidsCategoriesScreen from '../screens/KidsCategoriesScreen'
import KidsCategoryVideosScreen from '../screens/KidsCategoryVideosScreen'
import PlayVideoScreen from '../screens/PlayVideoScreen'
import SelectVideoScreen from '../screens/SelectVideoScreen'

// const MainNav = createStackNavigator({
  
//   ParentDashHomeScreen,
//   SignUp,
//   SignIn,
//   Home,   
//   SelectVideoScreen,
//   KidsCategoryVideosScreen,  
//   KidsCategoriesScreen,
//   PlayVideoScreen,
//   //HomeScreen,                 
// })

const Stack = createStackNavigator()
const options = {
  headerTitle: 'Em App',
  headerStyle: { backgroundColor: '#3b4c8a' },
  headerTintColor: 'white'
}

const MainNav = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={options}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ParentDashHomeScreen" component={ParentDashHomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default MainNav;