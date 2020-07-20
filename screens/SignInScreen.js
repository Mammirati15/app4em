import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const SignIn = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
    </View>
  )
}

SignIn.navigationOptions = {
  headerTitle: 'Sign In',
  headerStyle: {
    backgroundColor: '#3b4c8a'    
  },
  headerTintColor: 'white'
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 20,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#3b4c8a'
  }
})

export default SignIn;