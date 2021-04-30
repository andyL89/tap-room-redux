/* eslint-disable import/no-anonymous-default-export */
import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { id, name, brand, style, price, alcoholContent, pints } = action;
  switch (action.type) {
    case c.SELECTED_BEER:
      return Object.assign({}, state, {
        name: name,
        brand: brand,
        style: style,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      });
    case c.UNSELECTED_BEER:
      return state = {};
    default:
      return state;
  }
};