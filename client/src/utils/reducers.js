import { UPDATE_BLOGS } from './actions';

const initialState = {
    blogs: [],
  };
  
export const reducers = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_BLOGS:
        return {
          ...state,
          blogs: [...action.blogs],
        };
        //can apply more cases for other options in future
      default:
        return state;
    }
  };
  
  export default reducers;