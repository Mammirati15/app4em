import React, { Component } from 'react'
import { useState } from 'react'
import { TextInput, View, ScrollView, Text, StyleSheet, Button, Image} from 'react-native'
import { getAllCategories, createCategory, getYouTubeVideos, deleteCategory } from '../src/api'
import { connect } from 'react-redux'
import { saveCategory } from '../src/redux/actions/ActionCreators'




  // componentDidMount(){
  //   this.getAllCategories()
  //   getYouTubeVideos()
  // }


  

  // onSubmit(){   
  //   //console.log('this.state.name', this.state.name) 
  //   createCategory(this.state.name, this.state.keyWords)
  //     .then(resBody => {   
  //       //console.log(resBody)     
  //       this.props.navigation.navigate("SelectVideoScreen", {category: resBody.data})//this.setState({catName: ''})
  //     })
  // }

  // onDeleteButtonPress(catId){
  //   deleteCategory(catId)
  //     .then(response => {
  //       this.getAllCategories()
  //       console.log(response.status)
  //     })
  // }
const ParentDashHomeScreen = (props) => {
const [name, setName] = useState("")
const [keyWords, setKeyWords] = useState("")
  return (
  <ScrollView style={styles.container}>
    <Image style={styles.image} source={require('../src/images/app4em.png')} />
    <Text style={styles.headingText}>Welcome To Your Dashboard!</Text>
    <Text style={styles.subHeadingText}> Please Enter a Category for Your Child</Text>
    <Text style={styles.messageText}>{props.message}</Text>
    <View style={styles.formContainer}>
      <TextInput 
        style={styles.textInput}
        value={name}
        onChangeText={(value) => setName(value)} 
        placeholder="Enter a the Category Name"
        placeholderTextColor="grey"
      />
      <TextInput 
        style={styles.textInput}
        value={keyWords}
        onChangeText={(value) => setKeyWords(value)} 
        placeholder="Enter Search Keywords"
        placeholderTextColor="grey"
      />
      <Button 
        title="Create Category"
        style={styles.button}
        onPress={() => props.onSubmit(name, keyWords)}                                         
      />
    </View>
    <View>
      {props.categories.map((category) => {
        return (
          <View style={styles.categoryItemContainer}>
            <Text style={styles.categoryItemText} key={category._id}>{category.name}</Text>
            <Button
              color= 'red' 
              title="Delete"                  
              style={styles.deleteButton}
              //onPress={() => this.onDeleteButtonPress(category._id)}
            />
          </View>
        )
      })}          
    </View>
  </ScrollView>      
)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  formContainer: {
    width: '80%',
    alignItems: 'stretch',
    alignSelf: 'center'
  },
  headingText: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 20,
    color: 'black'
  },
  subHeadingText: {
    fontSize: 18,
    alignSelf: 'center',
    margin: 20,
    color: 'black'
  },
  messageText: {
    fontSize: 18,
    alignSelf: 'center',
    margin: 20,
    color: 'red'
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
  deleteButton: {
    width: '30%',
    color: 'red'
  },
  categoryItemContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10
  },
  categoryItemText: {
    color: 'black',
    fontSize: 30,
    paddingHorizontal: 20,
  },
  image: {
    alignSelf: 'center'
  }
  
})

const mapStateToProps = (state) => {
  return {
    message: state.categories.formMessage,
    categories: state.categories.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: function(name, keyWords){
      dispatch( saveCategory(name, keyWords) )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ParentDashHomeScreen);