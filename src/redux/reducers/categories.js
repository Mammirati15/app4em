import { FETCH_CATEGORIES_SUCCESS, CATEGORY_CREATE_FAILURE } from '../actions/actionTypes';

const initialState = {
  categories: [],
  categoryVideos: [],
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

    default:
      return state;
  }
}

export default categories;