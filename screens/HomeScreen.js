import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const App = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.headingText}> App4Em</Text>
      <View style={styles.btnContainer}>
        <Button title="Sign Up" onPress={() => props.navigation.navigate("SignUp")}/>
        <Button title="Sign In" onPress={() => props.navigation.navigate("SignIn")}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b4c8a'
  },
  headingText: {
    fontSize: 22,
    alignSelf: 'center',
    margin: 30,
    color: 'white'
  },
  btnContainer: {
    width: '80%',
    alignSelf: 'center'
  }
})

export default App;