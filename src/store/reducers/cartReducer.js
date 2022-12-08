import {
  ADD_ITEM,
  ADD_PODCAST_ITEM,
  DELETE_ITEM,
  ADD_PODCAST_VIDEO
} from '../actionsTypes/actionTypes';

const initialState = {
  numOfItems: 0,
  podcast_audio: {}
};

const cartReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1
      };

    case ADD_PODCAST_ITEM:
      return {
        ...state,
        podcast_audio: payload
      };
    case ADD_PODCAST_VIDEO:
      return {
        ...state,
        podcast_video: payload
      };
    default:
      return state;
  }
};
export default cartReducer;
