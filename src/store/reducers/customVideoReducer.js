import { ADD_AVATAR, ADD_BG, SET_CURRENT_AVATAR, SET_CURRENT_BACKGROUND } from '../actionsTypes/actionTypes';
import { avatars, scenes } from '../../pages/podcast/customization/data';

const initialState = {
  numberOfSpeakers: 0,
  avatarType: '',
  backgroundType: '',
  currentAvatar: [avatars[0], avatars[3], avatars[2]],
  currentBackground: scenes[0]
};

const customizeVideoReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case ADD_AVATAR:
      return {
        ...state,
        avatarType: payload
      };

    case ADD_BG:
      return {
        ...state,
        backgroundType: payload
      };

    case SET_CURRENT_AVATAR:
      return {
        ...state,
        currentAvatar: payload
      };
    case SET_CURRENT_BACKGROUND:
      return {
        ...state,
        currentBackground: payload
      };
    default:
      return state;
  }
};
export default customizeVideoReducer;
