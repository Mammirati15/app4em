import React, {Component} from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, CheckBox, Image, Button } from 'react-native'
import { getYouTubeVideos, saveSelectedVideos } from '../src/api'


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
    const category = this.props.navigation.getParam('category')
    this.setState({category})
    getYouTubeVideos(category.name)
      .then(result => {
        //console.log('***result****', result)
        for(var i=0; i<result.items.length; i++){          
          const video = result.items[i]
          video.selected = false
        }
        this.setState({videos: result.items})
        
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
    const videos = this.state.videos
    for(var i=0; i<videos.length; i++){
      if(videos[i].selected){
        selectedVideosIds.push(videos[i].id.videoId)
      }
    }
    saveSelectedVideos(categoryId, selectedVideosIds)
    this.props.navigation.navigate("ParentDashHomeScreen")//this.setState({catName: ''})
  }
  
  render(){
    return(
      <ScrollView style={styles.container}>        
        <Image style={styles.image} source={require('../src/images/app4em.png')} />
        <Text style={styles.headingText}>Select Your Videos</Text>           
        <Button 
            title="Save Changes"
            onPress={this.onSaveChangesPress}
            style={styles.button}
            width= '80%'
          />                 
          <View style={styles.categoryContainer}>            
            {this.state.videos.map((video, index) => {
              return (                
                <View style={{flexDirection: "row"}} >
                  <CheckBox 
                    value={video.selected}
                    onValueChange={(newValue) => this.onCheckboxChange(index, newValue)}
                    style={styles.checkbox}
                  />
                  <TouchableOpacity key={video.id.videoId}>
                    <Text style={styles.categoryItem} >{video.snippet.title}</Text>
                  </TouchableOpacity>
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


export default SelectVideoScreen;