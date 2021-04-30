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

export const restockBeer = id => ({
  type: c.RESTOCK_BEER,
  id
});

export const buyBeer = id => ({
  type: c.BUY_BEER,
  id
});

export const selectedBeer = (beer) => {
  const { name, brand, style, price, alcoholContent, pints, id } = beer;
  return {
    type: c.SELECTED_BEER,
    name: name,
    brand: brand,
    style: style,
    price: price,
    alcoholContent: alcoholContent,
    pints: pints,
    id: id,
  }
}

export const unselectedBeer = () => {
  return {
    type: c.UNSELECTED_BEER
  }
}