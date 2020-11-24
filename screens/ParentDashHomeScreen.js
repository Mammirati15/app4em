import React, { Component } from 'react'
import { TextInput, View, ScrollView, Text, StyleSheet, Button, Image} from 'react-native'
import { getAllCategories, createCategory, getYouTubeVideos, deleteCategory } from '../src/api'
import { connect } from 'react-redux'
import { onSelectCategory } from '../src/redux/actions/ActionCreators'


class ParentDashHome extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      keyWords: ''      
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  // componentDidMount(){
  //   this.getAllCategories()
  //   getYouTubeVideos()
  // }


  onChangeText(field, value){
    this.setState({[field]:  value})
  }

  onSubmit(){   
    //console.log('this.state.name', this.state.name) 
    createCategory(this.state.name, this.state.keyWords)
      .then(resBody => {   
        //console.log(resBody)     
        this.props.navigation.navigate("SelectVideoScreen", {category: resBody.data})//this.setState({catName: ''})
      })
  }

  onDeleteButtonPress(catId){
    deleteCategory(catId)
      .then(response => {
        this.getAllCategories()
        console.log(response.status)
      })
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={require('../src/images/app4em.png')} />
        <Text style={styles.headingText}>Welcome To Your Dashboard!</Text>
        <Text style={styles.subHeadingText}> Please Enter a Category for Your Child</Text>
        <View style={styles.formContainer}>
          <TextInput 
            style={styles.textInput}
            value={this.state.name}
            onChangeText={(newValue) => this.onChangeText('name', newValue)} 
            placeholder="Enter a the Category Name"
            placeholderTextColor="grey"
          />
          <TextInput 
            style={styles.textInput}
            value={this.state.keyWords}
            onChangeText={(newValue) => this.onChangeText('keyWords', newValue)} 
            placeholder="Enter Search Keywords"
            placeholderTextColor="grey"
          />
          <Button 
            title="Create Category"
            style={styles.button}
            onPress={this.onSubmit}                                         
          />
        </View>
        <View>
          {this.props.categories.map((category) => {
            return (
              <View style={styles.categoryItemContainer}>
                <Text style={styles.categoryItemText} key={category._id}>{category.name}</Text>
                <Button
                  color= 'red' 
                  title="Delete"                  
                  style={styles.deleteButton}
                  onPress={() => this.onDeleteButtonPress(category._id)}
                />
              </View>
            )
          })}          
        </View>
      </ScrollView>      
    )
  }
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
    //message: state.main.message,
    categories: state.categories.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: function(catInfo, navigate){
      dispatch( onSelectCategory(catInfo, navigate) )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ParentDashHome);