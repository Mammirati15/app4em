import React, {Component} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, CheckBox, Alert, Button } from 'react-native'
import { getYouTubeVideos } from '../src/api'


class SelectVideoScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      category: {},
      videos: [],
      
    }
    this.onCheckboxChange = this.onCheckboxChange.bind(this)
    this.onSaveChangesPress = this.onSaveChangesPress.bind(this)    
  }

  componentDidMount(){
    // const category = this.props.navigation.getParam('category')
    // this.setState({category})
    getYouTubeVideos('tacos')
      .then(result => {
        for(var i=0; i<result.items.length; i++){
          result.items[i].selected = false
        }
        this.setState({videos: result.items})
        console.log(result)
      })
  }
  
  onCheckboxChange(index, newValue){    
    let videosCopy = [...this.state.videos]
    videosCopy[index].selected = newValue    
    this.setState({videos: videosCopy})
    console.log(this.state.videos)
  }

  onSaveChangesPress(){
    const categoryId = this.state.category._id
    const selectedVideosIds = []
    for(var i=0; i<this.state.videos.length; i++){
      if(this.state.videos[i].selected){
        selectedVideosIds.push(this.state.videos[i].id.videoId)
      }
    }
    console.log(selectedVideosIds)
    //api.saveSelectedVideos(categoryId, selectedVideosIds)
  }
  
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.headingText}>Select Your Videos</Text> 
        <Button 
          title="Save Changes"
          onPress={this.onSaveChangesPress}
        />                     
        <View style={styles.categoryContainer}>            
          {this.state.videos.map((video, index) => {
            return (
              
                <View style={{flexDirection: "row"}} >
                  <CheckBox 
                    value={video.selected}
                    onValueChange={(newValue) => this.onCheckboxChange(index, newValue)}
                    style={{height: 40, width: 40}}
                  />
                  <TouchableOpacity onPress={() => this.onCategoryPress(video.snippet.title)} key={video.id.videoId}>
                    <Text style={styles.categoryItem} >{video.snippet.title}</Text>
                  </TouchableOpacity>
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
    fontSize: 25,
    width: 350    
  }   
})


export default SelectVideoScreen;