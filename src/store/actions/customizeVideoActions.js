import { ADD_AVATAR, ADD_BG } from '../actionsTypes/actionTypes';
import store from '../store';

const setAvatar = (id) => {
  return store.dispatch({
    type: ADD_AVATAR,
    payload: id
  });
};

const setBackgound = (id) => {
  return store.dispatch({
    type: ADD_BG,
    payload: id
  });
};

export { setAvatar, setBackgound };

// ({tyro:"ah", payload: ''}) - tyical action
// dispatching store.dispatch(action)
