import React, { Component } from 'react'
import { TextInput, View, Text, StyleSheet, Button} from 'react-native'
import { getAllCategories, createCategory, getYouTubeVideos, deleteCategory } from '../src/api'
import { connect } from 'react-redux'
import { onSelectCategory } from '../redux/ActionCreators'


class ParentDashHome extends Component {
  constructor(props){
    super(props)
    this.state = {
      catName: '',
      categories: []
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount(){
    this.getAllCategories()
    getYouTubeVideos()
  }

  getAllCategories(){
    getAllCategories()
      .then(result => {        
        this.setState({categories: result.data})
      })

  }

  onChangeText(value){
    this.setState({catName: value})
  }

  onSubmit(){
    console.log("this", this.state)
    createCategory(this.state.catName)
      .then(resBody => {
        this.getAllCategories()
        this.setState({catName: ''})
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
      <View style={styles.container}>
        <Text style={styles.headingText}>Welcome To Your Dashboard!</Text>
        <Text style={styles.subHeadingText}> Please Enter a Category for Your Child</Text>
        <View>
          <TextInput 
            style={styles.textInput}
            value={this.state.catName}
            onChangeText={(newValue) => this.onChangeText(newValue)} 
            placeholder="Enter a Category"
            placeholderTextColor="grey"
          />
          <Button 
            title="Create Category"
            style={styles.button}
            onPress={this.onSubmit}                                         
          />
        </View>
        <View>
          {this.state.categories.map((category) => {
            return (
              <View style={styles.categoryItemContainer}>
                <Text style={styles.categoryItemText} key={category._id}>{category.text}</Text>
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
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b4c8a'
  },
  headingText: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 20,
    color: 'white'
  },
  subHeadingText: {
    fontSize: 18,
    alignSelf: 'center',
    margin: 20,
    color: 'white'
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
    color: 'white',
    fontSize: 30,
    paddingHorizontal: 20,
  }
  
})

const mapStateToProps = (state) => {
  return {
    message: state.main.message
  }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: function(catInfo, navigate){
      dispatch( onSelectCategory(catInfo, navigate) )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ParentDashHome);