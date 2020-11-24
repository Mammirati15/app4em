import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button as Rnebutton} from 'react-native-elements'
import { ScrollView, TextInput, View, Text, StyleSheet, Button, Image} from 'react-native'
import { onSignUpSubmit } from '../redux/ActionCreators'

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: '',      
      email: '',
      password: '',
      passwordConf: ''
    },
    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText(fieldName, newValue){
    this.setState({[fieldName]: newValue})
  }

  render(){
    return(      
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={require('../src/images/app4em.png')} />       
        <Text style={styles.headingText}>Sign Up</Text>
        <View style={styles.formContainer}>
          <Text style={{fontSize: 20, color: 'blue'}}>{this.props.message}</Text>
          <TextInput 
            style={styles.textInput}
            value={this.state.userName}
            onChangeText={(newValue) => this.onChangeText("userName", newValue)}  
            placeholder="User Name"
            placeholderTextColor="grey"          
          />          
          <TextInput 
            style={styles.textInput}
            value={this.state.email}
            onChangeText={(newValue) => this.onChangeText("email", newValue)} 
            placeholder="Email"
            placeholderTextColor="grey"            
          />
          <TextInput 
            style={styles.textInput}
            value={this.state.password}
            onChangeText={(newValue) => this.onChangeText("password", newValue)} 
            placeholder="Password"
            placeholderTextColor="grey"            
          />
          <TextInput 
            style={styles.textInput}
            value={this.state.passwordConf}
            onChangeText={(newValue) => this.onChangeText("passwordConf", newValue)}  
            placeholder="Confirm Password"
            placeholderTextColor="grey"           
          />
          <Button 
            title="Sign Up"
            style={styles.button}
            onPress={() => {
              // this.props.onSubmit(
              // {
              //   userName: this.state.userName,
              //   lastName: this.state.lastName,
              //   email: this.state.email,
              //   password: this.state.password,
              //   passwordConf: this.state.passwordConf
              // },
              this.props.navigation.navigate('ParentDashHomeScreen')
            }
          }        
          />
          <Text style={styles.member}>Already a Member?</Text>
          <Rnebutton onPress={() => this.props.navigation.navigate('SignIn')} type='clear' style={styles.loginBtn} title="Log In"/>
        </View>        
      </ScrollView>
    )
  }
}

SignUp.navigationOptions = {
  headerTitle: 'Sign Up',
  headerStyle: {
    backgroundColor: 'white'    
  },
  headerTintColor: 'black'
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 20,
    color: 'black'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  formContainer: {
    width: '80%',
    alignItems: 'stretch',
    alignSelf: 'center'
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    height: 40,
    fontSize: 20,
    paddingLeft: 10,
    marginBottom: 20
  },
  button: {
    height: 60
  },
  member:{
    alignSelf: 'center',
    marginTop: 25
  },
  image: {
    alignSelf: 'center'
  },  
})

const mapStateToProps = (state) => {
  return {
    message: state.main.message
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: function(userData, navigate){
    dispatch( onSignUpSubmit(userData, navigate) )
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);