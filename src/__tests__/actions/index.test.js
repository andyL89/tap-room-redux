import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('tap-room actions', () => {

  it('toggleForm should create TOGGLE_FORM action', () => {
      expect(actions.toggleForm()).toEqual({
        type: c.TOGGLE_FORM
      });
    });

    it('addBeer should create ADD_BEER action', () => {
      expect(actions.addBeer({name: 'SeaQuenchAle', brand: 'Dogfish Head', kind: 'Sour', price: 4.99, alcoholContent: 4.9, pints: 124, timeOpen: 0,
      formattedWaitTime: "A few seconds", id: 1})).toEqual({
        type: c.ADD_BEER,
        name: 'SeaQuenchAle',
        brand: 'Dogfish Head',
        kind: 'Sour',
        price: 4.99,
        alcoholContent: 4.9,
        pints: 124,
        timeOpen: 0,
        formattedWaitTime: "A few seconds",
        id: 1
      });
    });

  it('deleteBeer should create DELETE_BEER action', () => {
      expect(actions.deleteBeer(1)).toEqual({
        type: c.DELETE_BEER,
        id: 1
      });
    });

    it('updateTime should create UPDATE_TIME action', () => {
      expect(actions.updateTime(1, "A few seconds")).toEqual({
        type: c.UPDATE_TIME,
        id: 1,
        formattedWaitTime: "A few seconds"
      });
    });

});