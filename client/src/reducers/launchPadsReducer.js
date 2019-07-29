import { LOADING, GET_LAUNCH_PADS } from '../actions/types';

const initialState = {
	launchPads: [],
	loading: false,
	fullNames: [],
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_LAUNCH_PADS:
			return {
				...state,
				launchPads: action.payload,
				...state.launchPads,
				loading: false,
			};

		case LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
}
