import formVisibleReducer from './form-visible-reducer';
import beerListReducer from './beer-list-reducer';
import selectedBeerReducer from './selected-beer-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  selectedBeer: selectedBeerReducer,
  masterBeerList: beerListReducer
});

export default rootReducer;