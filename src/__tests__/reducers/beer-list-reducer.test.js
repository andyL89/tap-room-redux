import beerListReducer from '../../reducers/beer-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('beerListReducer', () => {

  let action;

  const currentState = {
    1: {name: 'SeaQuenchAle',
    brand: 'Dogfish Head',
    style: 'Sour',
    price: 4.99,
    alcoholContent: 4.9,
    pints: 124,
    id: 1 },
    2: {name: 'Pale Ale',
    brand: 'Sierra Nevada',
    style: 'Pale',
    price: 4.99,
    alcoholContent: 5.6,
    pints: 1,
    id: 2 }
  }

  const beerData = {
    name: 'SeaQuenchAle',
    brand: 'Dogfish Head',
    style: 'Sour',
    price: 4.99,
    alcoholContent: 4.9,
    pints: 124,
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(beerListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new beer data to masterBeerList', () => {
    const { name, brand, style, price, alcoholContent, pints, id } = beerData;
    action = {
      type: c.ADD_BEER,
      name: name,
      brand: brand,
      style: style,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
    };
    expect(beerListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        style: style,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      }
    });
  });

  test('Should successfully delete a beer', () => {
    action = {
      type: c.DELETE_BEER,
      id: 1
    };
    expect(beerListReducer(currentState, action)).toEqual({
      2: {name: 'Pale Ale',
          brand: 'Sierra Nevada',
          style: 'Pale',
          price: 4.99,
          alcoholContent: 5.6,
          pints: 1,
          id: 2 }
    });
  });

  test('Should successfully restock beer by 124', () => {
    action = {
      type: 'RESTOCK_BEER',
      id:2
    };
    expect(beerListReducer(currentState, action)).toEqual({
      1: {name: 'SeaQuenchAle',
      brand: 'Dogfish Head',
      style: 'Sour',
      price: 4.99,
      alcoholContent: 4.9,
      pints: 124,
      id: 1 },
      2: {name: 'Pale Ale',
      brand: 'Sierra Nevada',
      style: 'Pale',
      price: 4.99,
      alcoholContent: 5.6,
      pints: 124,
      id: 2 }
    });
  });

  test('Should successfully subtract 1 pint from pints', () => {
    action = {
      type: 'BUY_BEER',
      id:1
    };
    expect(beerListReducer(currentState, action)).toEqual({
      1: {name: 'SeaQuenchAle',
      brand: 'Dogfish Head',
      style: 'Sour',
      price: 4.99,
      alcoholContent: 4.9,
      pints: 123,
      id: 1 },
      2: {name: 'Pale Ale',
      brand: 'Sierra Nevada',
      style: 'Pale',
      price: 4.99,
      alcoholContent: 5.6,
      pints: 124,
      id: 2 }
    });
  });

});