import { getAllCategories, createCategory, getYouTubeVideos } from '../../api'
import { FETCH_CATEGORIES_SUCCESS , FETCH_YOUTUBE_VIDEOS_SUCCESS, CATEGORY_CREATE_FAILURE, SELECT_YOUTUBE_VIDEO, YOUTUBE_VIDEO_SELECTED} from './ActionTypes'
import { navigate } from '../../../navigation/RootNavigation'


export const onSignUpSubmit = (userData, navigate) => {    
  return (dispatch) => {
    if(!userData.userName){
      dispatch({
        type: 'SIGNUP_SUBMIT_FAILED',
        message: 'User Name is Required'
      })
      return Promise.resolve()
    }
    const options = {    
      method: 'POST', 
      mode: 'cors',    
      headers: {
        'Content-Type': 'application/json'        
      },      
      body: JSON.stringify(userData) 
    }

    return fetch('http://localhost:5000/users', options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigate('Home')
        dispatch({
          type: 'foo'
        })
      })
      .catch((err) => {
        console.log(err)
      })           
    }    
}

export const onSignInSubmit = (userData, navigate) => {    
  return (dispatch) => {
    if(!userData.email){
      dispatch({
        type: 'SIGNIN_SUBMIT_FAILED',
        message: 'Email is Required'
      })
      return Promise.resolve()
    }
    const options = {    
      method: 'POST', 
      mode: 'cors',    
      headers: {
        'Content-Type': 'application/json'        
      },      
      body: JSON.stringify(userData) 
    }

    return fetch('http://localhost:5000/users', options)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        navigate('Home')
        dispatch({
          type: 'foo'
        })
      })
      .catch((err) => {
        console.log(err)
      })
      
    
  }    
}

export const fetchCategories = (navigate) => {
  return async (dispatch) => {
    const result = await getAllCategories()
    const categories = result.data
    dispatch({type: FETCH_CATEGORIES_SUCCESS, payload: categories})
    navigate('ParentDashHomeScreen')
  }
}

export const saveCategory = (name, keyWords) => {  
  
  return async (dispatch) => {
    if(!name){
      dispatch({
        type: CATEGORY_CREATE_FAILURE,
        payload:'Category is Required'
      })
      return Promise.resolve()
    }

    await createCategory(name, keyWords)
    let result = await getYouTubeVideos(name)
    let videos = result.items.concat([])

    for(var i=0; i<videos.length; i++){          
      const video = videos[i]
      video.selected = false
    }
    dispatch({
      type: FETCH_YOUTUBE_VIDEOS_SUCCESS,
      payload: videos
    })       
      
    navigate("SelectVideosScreen")
    return Promise.resolve()
  }
}

export const selectYouTubeVideo = (videoIndex) => {
  return {
    type: YOUTUBE_VIDEO_SELECTED,
    payload: videoIndex      
  }  
  
  
}
  // return (dispatch) => {
  //   if(!catInfo.catName){
  //     dispatch({
  //       type: 'CATEGORY_SELECT_FAILED',
  //       message: 'Category is Required'
  //     })
  //     return Promise.resolve()
  //   }
  //   const options = {    
  //     method: 'POST', 
  //     mode: 'cors',    
  //     headers: {
  //       'Content-Type': 'application/json'        
  //     },      
  //     body: JSON.stringify(catInfo) 
  //   }

  //   return fetch('http://localhost:3000/categories', options)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       navigate('Home')
  //       dispatch({
  //         type: 'foo'
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })           
      


        // dispatch({
        //   type: 'SIGNUP_SUBMIT_SUCCESS', 
        //   payload: {data, message:'success'}
        // })
      // .catch((err) => {
      //   console.log(err)
      //   dispatch({
      //     type: 'SIGNUP_SUBMIT_FAILED', message: 'danger'
      //   })
      // 
 