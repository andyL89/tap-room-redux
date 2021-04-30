import beerListReducer from '../../reducers/beer-list-reducer';
import * as c from '../../actions/ActionTypes';
import Moment from 'moment';

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
    pints: 124,
    id: 2 }
  }

  const beerData = {
    name: 'SeaQuenchAle',
    brand: 'Dogfish Head',
    style: 'Sour',
    price: 4.99,
    alcoholContent: 4.9,
    pints: 124,
    timeOpen: 0,
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(beerListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to masterBeerList', () => {
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
          pints: 124,
          id: 2 }
    });
  });

  test('Should add a formatted wait time to beer entry', () => {
    const { name, brand, style, price, alcoholContent, pints, id } = beerData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(beerListReducer({ [id] : beerData }, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        style: style,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });

  test('should successfully add a beer to the beer list that includes Moment-formatted wait times', () => {
    const { name, brand, style, price, alcoholContent, pints, timeOpen, id } = beerData;
    action = {
      type: c.ADD_BEER,
      name: name,
      brand: brand,
      style: style,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(beerListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        style: style,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });

});