import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet,  Image, Button } from 'react-native'
import { CheckBox } from 'react-native-elements'
import {selectYouTubeVideo} from '../src/redux/actions/ActionCreators'
import { saveSelectedVideos } from '../src/api'





  // onSaveChangesPress(){
  //   const categoryId = this.state.category._id
  //   const selectedVideosIds = []
  //   const videos = this.state.videos
  //   for(var i=0; i<videos.length; i++){
  //     if(videos[i].selected){
  //       selectedVideosIds.push(videos[i].id.videoId)
  //     }
  //   }
  //   saveSelectedVideos(categoryId, selectedVideosIds)
  //   this.props.navigation.navigate("ParentDashHomeScreen")//this.setState({catName: ''})
  // }
const SelectVideosScreen = (props) => (
  <ScrollView style={styles.container}>        
    <Image style={styles.image} source={require('../src/images/app4em.png')} />
    <Text style={styles.headingText}>Select Your Videos</Text>           
    {/*<Button 
        title="Save Changes"
        onPress={props.onSaveChangesPress}
        style={styles.button}
        width= '80%'
    />  */}               
      <View style={styles.categoryContainer}>            
        {props.youTubeVideos.map((video, videoIndex) => {
          return (                
            <View key={videoIndex} style={{flexDirection: "row"}} >
              <CheckBox 
                checked={video.selected}
                onPress={() => props.onCheckboxChange(videoIndex)}
                style={styles.checkbox}
              />
              
                <Text style={styles.categoryItem} >{video.snippet.title}</Text>
              
            </View>                              
          )                
        })}          
      </View>                          
  </ScrollView>    
)
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headingText: {
    fontSize: 25,
    alignSelf: 'center',
    margin: 20,
    color: 'black'
  },
  
  categoryContainer: {
    width: '75%',
    alignSelf: 'center',
  },
  categoryItem: {
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 20,
    backgroundColor: 'pink',        
    textAlign: 'center',    
    fontSize: 25,
    width: 275    
  },
  image: {
    alignSelf: 'center'
  },
  checkbox: {
    marginLeft: 0
  },
  button: {
    position:'absolute',
    bottom:0,
    alignSelf:'flex-end'
  }
})

const mapStateToProps = (state) => ({
  categoryVideos: state.categories.categoryVideos,
  youTubeVideos: state.categories.youTubeVideos
})

const mapDispatchToProps = (dispatch) => ({
  onCheckboxChange(videoIndex) {
    console.log(videoIndex) 
    dispatch(selectYouTubeVideo(videoIndex))
    
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectVideosScreen);