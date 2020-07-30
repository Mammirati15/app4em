import React, { Component } from 'react'
import { TextInput, View, Text, StyleSheet, Button} from 'react-native'
import { getAllCategories, createCategory, getYouTubeVideos } from '../src/api'
import { connect } from 'react-redux'
import { onSelectCategory } from '../redux/ActionCreators'


class ParentDashHome extends Component {
  constructor(props){
    super(props)
    this.state = {
      catName: '',
      categories: []
    }
  }

  componentDidMount(){
    this.getAllCategories()
    getYouTubeVideos()
  }

  getAllCategories(){
    getAllCategories()
      .then(result => {
        console.log(result)
        this.setState({categories: result.data})
      })

  }

  onChangeText(value){
    this.setState({catName: value})
  }

  onSubmit(){
    createCategory(this.state.catName)
      .then(resBody => {
        this.getAllCategories()
        this.setState({catName: ''})
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
            onPress={() => this.props.onSubmit(
              {
                catName: this.state.catName,
                categories: this.state.categories
              },
              this.props.navigation.navigate
            )}              
          />
        </View>
        <View>
          {this.state.categories.map((category) => {
            return <Text key={category._id}>{category.text}</Text>
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