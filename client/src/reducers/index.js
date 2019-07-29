import { combineReducers } from 'redux';
import launchesReducer from './launchesReducer';
import launchPadsReducer from './launchPadsReducer';

export default combineReducers({
	launches: launchesReducer,
	launchPads: launchPadsReducer,
});
