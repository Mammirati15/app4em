import { 
  FETCH_CATEGORIES_SUCCESS, 
  CATEGORY_CREATE_FAILURE, 
  FETCH_YOUTUBE_VIDEOS_SUCCESS,
  YOUTUBE_VIDEO_SELECTED 
} from '../actions/ActionTypes';

let initialState = {
  categories: [],
  categoryVideos: [],
  youTubeVideos: [],
  formMessage: ""
}

const categories = (state=initialState, action) => {
  if(!action) return state

  let newState, videoIndex, video

  switch(action.type) {

    case FETCH_CATEGORIES_SUCCESS:
      newState = Object.assign({}, state);
      newState.categories = action.payload;
      return newState;

    case CATEGORY_CREATE_FAILURE:
      newState = Object.assign({}, state);
      newState.formMessage = action.payload;
      return newState;

    case FETCH_YOUTUBE_VIDEOS_SUCCESS:
      newState = Object.assign({}, state);
      newState.youTubeVideos = action.payload;
      return newState;

    case YOUTUBE_VIDEO_SELECTED: 
      console.log(action.payload)     
      videoIndex = action.payload
      newState = Object.assign({}, state);
      video = newState.youTubeVideos[videoIndex]
      video.selected = !video.selected
      video.snippet.title += " selected" 
      console.log(video)               
      return newState
    
    default:
      return state;
  }
}

export default categories;