/* eslint-disable import/no-anonymous-default-export */
import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, style, price, alcoholContent, pints, id } = action;
  switch (action.type) {
  case c.ADD_BEER:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        style: style,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id,
      }
    });
  case c.DELETE_BEER:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};