import { ADD_ITEM, DELETE_ITEM } from '../actionsTypes/actionTypes';

const addItem = () => ({
  type: ADD_ITEM,
  payload: 'add Item payload',
});

const deleteItem = () => ({
  type: DELETE_ITEM,
  payload: 'delete Item payload',
});

export { addItem, deleteItem };
