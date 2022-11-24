import { ADD_AVATAR, ADD_BG } from '../actionsTypes/actionTypes';

const setAvatar = (id) => ({
  type: ADD_AVATAR,
  payload: id
});

const setBg = (id) => ({
  type: ADD_BG,
  payload: id
});

export { setAvatar, setBg };
