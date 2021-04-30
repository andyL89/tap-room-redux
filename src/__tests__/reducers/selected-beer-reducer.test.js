import selectedBeerReducer from '../../reducers/selected-beer-reducer';
import * as c from '../../actions/ActionTypes';

describe('selectedBeerReducer', () => {

  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(selectedBeerReducer({}, { type: null })).toEqual({});
  });

  test('Should set selctedBeer to value of beer', () => {
    action = {
      type: c.SELECTED_BEER,
      name: 'SeaQuenchAle',
      brand: 'Dogfish Head',
      style: 'Sour',
      price: 4.99,
      alcoholContent: 4.9,
      pints: 124,
      id: 1
    };
    expect(selectedBeerReducer({}, action)).toEqual({
      name: 'SeaQuenchAle',
      brand: 'Dogfish Head',
      style: 'Sour',
      price: 4.99,
      alcoholContent: 4.9,
      pints: 124,
      id: 1
    })
  })

  test('Should set selectedBeer to empty object', () => {
    action = {
      type: c.UNSELECTED_BEER,
    };
    expect(selectedBeerReducer({}, action)).toEqual({});
  });

});