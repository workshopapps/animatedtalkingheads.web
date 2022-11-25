import { ADD_ITEM, ADD_PODCAST_ITEM, DELETE_ITEM } from '../actionsTypes/actionTypes';

const addItem = () => ({
  type: ADD_ITEM,
  payload: 'add Item payload'
});

const deleteItem = () => ({
  type: DELETE_ITEM,
  payload: 'delete Item payload'
});

const addPodcast = (data) => ({
  type: ADD_PODCAST_ITEM,
  payload: data
});
export { addItem, deleteItem, addPodcast };
