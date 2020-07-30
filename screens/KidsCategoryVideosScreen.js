import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { getYouTubeVideos } from '../src/api'

class KidsCategoriesScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: []
    }
  }
  
  componentDidMount(){
    const searchText = this.props.navigation.getParam('searchText', 'cat')
    getYouTubeVideos(searchText)
      .then(result => {
        this.setState({videos: result.items})
        console.log(result)
      })
  } 
  
  onVideoPress(videoId){
    this.props.navigation.navigate('PlayVideoScreen', {videoId})
  }

  render(){    
    return(
      <View style={styles.container}>
        <Text style={styles.headingText}>Welcome To Your Dashboard!</Text>
        <Text style={styles.subHeadingText}> Tap a Category to View Videos </Text>              
        <View style={styles.categoryContainer}>            
          {           
            this.state.videos.map((video, index) => {
              return (
                <TouchableOpacity onPress={() => this.onVideoPress(video.id.videoId) } key={video.id.videoId}>
                  <Text 
                    style={styles.categoryItem} 
                    
                  >
                  {video.snippet.title.substring(0, 50)}
                  </Text>
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