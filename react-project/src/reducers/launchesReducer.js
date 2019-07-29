import {
	LOADING,
	GET_LAUNCHES,
	GET_MAX_YEARS,
	GET_MIN_YEARS,
	VALIDATE_YEARS,
	SEARCH_FILTERS,
} from '../actions/types';

const initialState = {
	launches: [],
	loading: false,
	maxYears: [],
	minYears: [],
	searchFilters: { keywords: '', launchPad: '', maxYear: '', minYear: '' },
	currentYears: { minYear: '', maxYear: '' },
};

export default function(state = initialState, action) {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_LAUNCHES:
			return {
				...state,
				launches: action.payload,
				...state.launches,
				loading: false,
			};
		case SEARCH_FILTERS:
			return { ...state, searchFilters: action.payload };
		case GET_MAX_YEARS:
			return {
				...state,
				maxYears: action.payload,
				...state.maxYears,
			};
		case GET_MIN_YEARS:
			return {
				...state,
				minYears: action.payload,
				...state.minYears,
			};
		case VALIDATE_YEARS:
			return {
				...state,
				currentYears: action.payload,
			};

		default:
			return state;
	}
}
