import { FETCH_CATEGORIES_SUCCESS } from '../actions/actionTypes';

const initialState = {
  categories: []
}

const categories = (state=initialState, action) => {
  if(!action) return state

  let newState

  switch(action.type) {

    case FETCH_CATEGORIES_SUCCESS:
      newState = Object.assign({}, state);
      newState.categories = action.payload;
      return newState;

    default:
      return state;
  }
}

export default categories;