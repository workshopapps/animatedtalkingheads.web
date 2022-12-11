import { ADD_AVATAR, ADD_BG } from '../actionsTypes/actionTypes';
import head from '../../assets/avatars/avatars-front/Avatars-03.png';

const initialState = {
  numberOfSpeakers: 0,
  avatarType: '',
  backgroundType: '',
  currentAvatar: [head, head]
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

    case 'SET_CURRENT_AVATAR':
      return {
        ...state,
        currentAvatar: payload
      };
    default:
      return state;
  }
};
export default customizeVideoReducer;
