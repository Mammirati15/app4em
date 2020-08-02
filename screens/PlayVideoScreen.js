import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'


const PlayVideoScreen = (props) => {
  const videoId = props.navigation.getParam('videoId')
  console.log(videoId)
  return (
    <WebView 
      javaScriptEnabled={true}
      source={{ uri: 'https://www.youtube.com/embed/' + videoId }}
       
    />
  )
}

export default PlayVideoScreen;