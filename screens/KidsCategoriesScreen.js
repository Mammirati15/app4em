import React, { Component } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { getAllCategories } from '../src/api'
import { TouchableOpacity } from 'react-native'



class KidsCategoriesScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      catName: '',
      categories: [],
      videos: []
    }
  }

  componentDidMount(){
    this.getAllCategories()    
  }

  getAllCategories(){
    getAllCategories()
      .then(result => {
        console.log(result)
        this.setState({categories: result.data})
      })
  }

  onCategoryPress(categoryText){
    this.props.navigation.navigate('KidsCategoryVideosScreen', {searchText: categoryText})    
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.headingText}>Welcome To Your Dashboard!</Text>
        <Text style={styles.subHeadingText}> Tap a Category to View Videos </Text>              
        <View style={styles.categoryContainer}>            
          {this.state.categories.map((category) => {
            return (
              <TouchableOpacity onPress={() => this.onCategoryPress(category.text)}>
                <Text style={styles.categoryItem} key={category._id}>{category.text}</Text>
              </TouchableOpacity>
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
  categoryContainer: {
    width: '75%',
    alignSelf: 'center',
  },
  categoryItem: {
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20,
    backgroundColor: 'grey',        
    textAlign: 'center',
    height: 75,
    fontSize: 40,    
  }   
})


export default KidsCategoriesScreen;