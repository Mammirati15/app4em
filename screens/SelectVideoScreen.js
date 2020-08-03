import React, {Component} from 'react'
import { View, Text } from 'react-native'

const videos =[
  {title: 'cats'},
  {title: 'dogs'},
  {title: 'alligators'}
]

class SelectVideoScreen extends Component{
  constructor(props){
    super(props)
    this.state = {
      category: {},
      videos: videos
    }    
  }

  componentDidMount(){
    const category = this.props.navigation.getParam('category')
    this.setState({category})
  }
  
  render(){
    return(
      <View>
        <Text>{this.state.category.text}</Text>
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
    )
  }
}




export default SelectVideoScreen;