import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const Home = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.headingText}>AppEm</Text>
      <View style={styles.btnContainer}>
        <View style={styles.topBtnContainer}>
          <Button title="Sign Up" onPress={() => props.navigation.navigate("SignUp")}/>
        </View>
        <Button title="Sign In" onPress={() => props.navigation.navigate("SignIn")}/>
      </View>
    </View>
  )
}

Home.navigationOptions = {
  headerTitle: 'Home',
  headerStyle: {
    backgroundColor: '#3b4c8a'    
  },
  headerTintColor: 'white'
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
  },
  topBtnContainer: {
    marginBottom: 20
  }
})

export default Home;