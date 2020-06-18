import {IncrementReducer} from './redcuers/counter'
import {createStore} from 'redux';

//step 1: declare Reducer 

//create Store instance
export const store = createStore(IncrementReducer);

