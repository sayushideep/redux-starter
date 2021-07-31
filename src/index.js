import store from './store';
import { bugAdded, bugResolved } from './actions';

const unsubscribe = store.subscribe(() => {
    console.log("State changed !!", store.getState());
})

// store.dispatch()

// unsubscribe();

store.dispatch(bugAdded("BUG 1"));//false
console.log("between", store.getState());
store.dispatch(bugResolved(1));//true

console.log(store.getState());

