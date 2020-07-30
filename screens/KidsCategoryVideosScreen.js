import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

class KidsCategoriesScreen extends Component { 
  
  onCategoryPress(categoryText){
    getYouTubeVideos(categoryText)
      .then(result => {
        this.props.navigation.navigate(
          'KidsCategoryVideosScreen', {videos: result.items}
        )
        
      })
  }

  render(){
    const videos = this.props.navigation.getParam(videos)
    return(
      <View style={styles.container}>
        <Text style={styles.headingText}>Welcome To Your Dashboard!</Text>
        <Text style={styles.subHeadingText}> Tap a Category to View Videos </Text>              
        <View style={styles.categoryContainer}>            
          {            
            videos.map((video, index) => {
              return (
                <TouchableOpacity onPress={() => this.onCategoryPress(video)}>
                  <Text style={styles.categoryItem} key={index}>{category.text}</Text>
                </TouchableOpacity>
              )                
            })
          }          
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