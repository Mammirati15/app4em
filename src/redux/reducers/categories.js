import { 
  FETCH_CATEGORIES_SUCCESS, 
  CATEGORY_CREATE_FAILURE, 
  FETCH_YOUTUBE_VIDEOS_SUCCESS 
} from '../actions/ActionTypes';

const initialState = {
  categories: [],
  categoryVideos: [],
  youTubeVideos: [],
  formMessage: ""
}

const categories = (state=initialState, action) => {
  if(!action) return state

  let newState

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
    
      default:
      return state;
  }
}

export default categories;