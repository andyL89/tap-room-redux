import * as c from './../actions/ActionTypes';

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
})

export const addBeer = (beer) => {
  const { name, brand, style, price, alcoholContent, pints, id } = beer;
  return {
    type: c.ADD_BEER,
    name: name,
    brand: brand,
    style: style,
    price: price,
    alcoholContent: alcoholContent,
    pints: pints,
    id: id,
  }
}

export const deleteBeer = id => ({
  type: c.DELETE_BEER,
  id
});

export const restockBeer = (beer) => {
  const { name, brand, style, price, alcoholContent, pints, id } = beer;
  return {
    type: c.RESTOCK_BEER,
    name: name,
    brand: brand,
    style: style,
    price: price,
    alcoholContent: alcoholContent,
    pints: pints,
    id: id,
  }
}