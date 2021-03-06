import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button as Rnebutton} from 'react-native-elements'
import { TextInput, View, Text, StyleSheet, Button, Image} from 'react-native'
import { onSignInSubmit } from '../src/redux/actions/ActionCreators'

class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {      
      userName: '',
      password: '',      
    },
    this.onChangeText = this.onChangeText.bind(this)
    
  }

  onChangeText(fieldName, newValue){
    this.setState({[fieldName]: newValue})
  }

  

  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.image} source={require('../src/images/app4em.png')} /> 
        <Text style={styles.headingText}>Log In</Text>
        <View style={styles.formContainer}>
        <Text style={{fontSize: 20, color: 'black'}}>{this.props.message}</Text>         
          
          <TextInput 
            style={styles.textInput}
            value={this.state.email}
            onChangeText={(newValue) => this.onChangeText("userName", newValue)} 
            placeholder="User Name"
            placeholderTextColor="grey"            
          />
          <TextInput 
            style={styles.textInput}
            value={this.state.password}
            onChangeText={(newValue) => this.onChangeText("password", newValue)} 
            placeholder="Password"
            placeholderTextColor="grey"            
          />
          
          <Button 
            title="Log In"
            style={styles.button}
            onPress={() => this.props.onSubmit(
              {                
                email: this.state.email,
                password: this.state.password                
              },
              this.props.navigation.navigate
            )
          }        
          />
        <Text style={styles.memberText}>Not a Member Yet?</Text>
        <Rnebutton onPress={() => this.props.navigation.navigate('SignUp')} type='clear' title="Sign Up Here"/>
        </View>        
      </View>
    )
  }
}

SignIn.navigationOptions = {
  headerTitle: 'Log In',
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
    color: 'white',
    height: 40,
    fontSize: 20,
    paddingLeft: 10,
    marginBottom: 20
  },
  button: {
    height: 60
  },
  image: {
    alignSelf: 'center'
  },
  memberText: {
    alignSelf: 'center',
    marginTop: 20
  }
})

const mapStateToProps = (state) => {
  return {
    message: state.main.message
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: function(userData, navigate){
    dispatch( onSignInSubmit(userData, navigate) )
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { View, Text, TextInput, StyleSheet, Button} from 'react-native'
// import { onSignInSubmit } from '../redux/ActionCreators'


// class SignIn extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       email: '',
//       password: ''
//     }
//     this.onChangeText = this.onChangeText.bind(this);
//   }

//   onChangeText(fieldName, newValue){
//     this.setState({[fieldName]: newValue})
//   }

//   render(){
//     return(
//       <View style={styles.container}>
//         <Text style={styles.headingText}>Sign In</Text>
      
//       <View style={styles.formContainer}>
//         <TextInput
//           style={styles.textInput} 
//           value={this.state.email}
//           onChangeText={(newValue) => this.onChangeText("email", newValue)}
//           placeholder="Email"
//           placeholderTextColor="grey"
//         />      
//         <TextInput
//           style={styles.textInput} 
//           value={this.state.password}
//           onChangeText={(newValue) => this.onChangeText("password", newValue)}
//           placeholder="Password"
//           placeholderTextColor="grey"
//         />
//         <Button 
//             title="Sign In"
//             style={styles.button}
//             onPress={() => this.props.onSubmit(
//               {                
//                 email: this.state.email,
//                 password: this.state.password                
//               },
//               this.props.navigation.navigate
//             )
//           }        
//         />
//       </View>
//     </View>
//     )
//   }
// }


// SignIn.navigationOptions = {
//   headerTitle: 'Sign In',
//   headerStyle: {
//     backgroundColor: '#3b4c8a'    
//   },
//   headerTintColor: 'white'
// }

// const styles = StyleSheet.create({
//   headingText: {
//     fontSize: 25,
//     alignSelf: 'center',
//     margin: 20,
//     color: 'white'
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#3b4c8a'
//   },
//   formContainer: {
//     width: '80%',
//     alignItems: 'stretch',
//     alignSelf: 'center'
//   },
//   textInput: {
//     borderColor: 'white',
//     borderWidth: 1,
//     color: 'white',
//     height: 40,
//     fontSize: 20,
//     paddingLeft: 10,
//     marginBottom: 20
//   },
//   button: {
//     height: 60
//   }
// })

// const mapStateToProps = (state) => {
//   return {
//     message: state.main.message
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: function(userData, navigate){
//     dispatch( onSignInSubmit(userData, navigate) )
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);