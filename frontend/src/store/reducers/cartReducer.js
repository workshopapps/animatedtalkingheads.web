import { ADD_ITEM, DELETE_ITEM } from '../actionsTypes/actionTypes';

const initialState = {
  numOfItems: 0,
};

const cartReducer = (state = initialState, { type } = {}) => {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state;
  }
};
export default cartReducer;
