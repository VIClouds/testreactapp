import {combineReducers, createStore} from "redux";
import reducersRoles from './../roles/reducers/roles.reducers'

const reducers = combineReducers({
    reducersRoles,

});


const store = createStore(reducers);



export default store;