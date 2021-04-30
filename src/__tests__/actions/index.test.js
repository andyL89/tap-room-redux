import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('tap-room actions', () => {

  it('toggleForm should create TOGGLE_FORM action', () => {
      expect(actions.toggleForm()).toEqual({
        type: c.TOGGLE_FORM
      });
    });

    it('addBeer should create ADD_BEER action', () => {
      expect(actions.addBeer({name: 'SeaQuenchAle', brand: 'Dogfish Head', style: 'Sour', price: 4.99, alcoholContent: 4.9, pints: 124, id: 1})).toEqual({
        type: c.ADD_BEER,
        name: 'SeaQuenchAle',
        brand: 'Dogfish Head',
        style: 'Sour',
        price: 4.99,
        alcoholContent: 4.9,
        pints: 124,
        id: 1
      });
    });

  it('deleteBeer should create DELETE_BEER action', () => {
      expect(actions.deleteBeer(1)).toEqual({
        type: c.DELETE_BEER,
        id: 1
      });
    });

  it('restockBeer should create RESTOCK_BEER action', () => {
    expect(actions.restockBeer({name: 'SeaQuenchAle', brand: 'Dogfish Head', style: 'Sour', price: 4.99, alcoholContent: 4.9, pints: 124, id: 1})).toEqual({
      type: c.RESTOCK_BEER,
      name: 'SeaQuenchAle',
      brand: 'Dogfish Head',
      style: 'Sour',
      price: 4.99,
      alcoholContent: 4.9,
      pints: 124,
      id: 1
    });
  });

});