import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const SignIn = () => {
  return(
    <View>
      <Text style={styles.text}>Sign In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 20
  }
})

export default SignIn;