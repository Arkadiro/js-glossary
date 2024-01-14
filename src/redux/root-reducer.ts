import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import {StateModel} from './state.model';

export default combineReducers<StateModel>({
    currentUser: userReducer,
});
