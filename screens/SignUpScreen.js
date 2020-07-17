import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const SignUp = () => {
  return(
    <View>
      <Text style={styles.text}>Sign Up</Text>
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

export default SignUp;