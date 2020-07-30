/* global fetch */
const apiUrl = 'http://localhost:3000/categories'
const youTubeApiKey = 'AIzaSyB7bKJJSwI9fidWzHisl8xY23OAze3rBUk'
const youTubeApiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=' + 
  youTubeApiKey + '&q='

export const getYouTubeVideos = (categoryText) => {
  return fetch(youTubeApiUrl + categoryText)
    .then(response => response.json())      
}

export const getAllCategories = () => {
  return fetch(apiUrl)
    .then(response => response.json())
}

export const createCategory = (catName) => {
  var options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: catName })
  }
  return fetch(apiUrl, options)
    .then(response => response.json())
}

