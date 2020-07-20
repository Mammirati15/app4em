import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, View, Text, StyleSheet, Button} from 'react-native'
import { onSignUpSubmit } from '../redux/ActionCreators'

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
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
      <View style={styles.container}>
        <Text style={styles.headingText}>Sign Up</Text>
        <View style={styles.formContainer}>
        <Text style={{fontSize: 20, color: 'white'}}>{this.props.message}</Text>
          <TextInput 
            style={styles.textInput}
            value={this.state.firstName}
            onChangeText={(newValue) => this.onChangeText("firstName", newValue)}  
            placeholder="First Name"
            placeholderTextColor="grey"          
          />
          <TextInput 
            style={styles.textInput}
            value={this.state.lastName}
            onChangeText={(newValue) => this.onChangeText("lastName", newValue)}             
            placeholder="Last Name"
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
            onPress={() => this.props.onSubmit(
              this.state.firstName,
              this.state.lastName,
              this.state.email,
              this.state.password,
              this.state.passwordConf
            )}
          />
        </View>
      </View>
    )
  }
}

SignUp.navigationOptions = {
  headerTitle: 'Sign Up',
  headerStyle: {
    backgroundColor: '#3b4c8a'    
  },
  headerTintColor: 'white'
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 20,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#3b4c8a'
  },
  formContainer: {
    width: '80%',
    alignItems: 'stretch',
    alignSelf: 'center'
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    height: 40,
    fontSize: 20,
    paddingLeft: 10,
    marginBottom: 20
  },
  button: {
    height: 60
  }
})

const mapStateToProps = (state) => {
  return {
    message: state.main.message
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: function(firstName, lastName, email, password, passwordConf){
    dispatch( onSignUpSubmit(firstName, lastName, email, password, passwordConf) )
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);