import 'core-js';
import {
	GET_LAUNCHES,
	LOADING,
	GET_LAUNCH_PADS,
	GET_MAX_YEARS,
	GET_MIN_YEARS,
	VALIDATE_YEARS,
	SEARCH_FILTERS,
	KEYWORDS,
	LAUNCH_PAD,
	MIN_YEAR,
	MAX_YEAR,
} from './types';

import { getYear, uniqueObject, setToStore, getFromStore } from '../utls';

////////////////////////////////////////
//// TEST DATA INCASE REQUIRE TO TEST ON ONLINE WHILE ON LOCALHOST, i.e IE from Mac
////////////////////////////////////////
// import LaunchesTestData from '../TestData/launches.json';
// import LaunchPadsTestData from '../TestData/launchpads.json';

export const setLoading = value => {
	return {
		type: LOADING,
		payload: value,
	};
};

export const getYears = state => dispatch => {
	const allYears = state.map(item => {
		const getEachYear = {};
		getEachYear.id = getYear(item.launch_date_local);
		getEachYear.text = getYear(item.launch_date_local);
		getEachYear.disabled = false;
		return getEachYear;
	});
	const uniqueYears = uniqueObject(allYears);
	setToStore('minYears', uniqueYears);
	setToStore('maxYears', uniqueYears);
	const getMinYears = getFromStore('minYears');
	const getMaxYears = getFromStore('maxYears');
	dispatch({
		type: GET_MIN_YEARS,
		payload: getMinYears,
	});
	dispatch({
		type: GET_MAX_YEARS,
		payload: getMaxYears,
	});
};

export const getLaunches = () => async dispatch => {
	try {
		dispatch(setLoading());
		const launches = await fetch('/launches');
		const launchesData = await launches.json();
		dispatch({ type: GET_LAUNCHES, payload: launchesData });
		dispatch(getYears(launchesData));
	} catch (e) {
		console.error('Error in fetching launches');
		dispatch({ type: GET_LAUNCHES, payload: [] });
	}
};

export const getLaunchPads = () => async dispatch => {
	try {
		dispatch(setLoading());
		const launchPads = await fetch('/launchpads');
		const launchPadsData = await launchPads.json();
		dispatch({ type: GET_LAUNCH_PADS, payload: launchPadsData });
	} catch (e) {
		console.error('Error in fetching launch Pads');
		dispatch({ type: GET_LAUNCH_PADS, payload: [] });
	}
};

export const validateYears = (minYear, maxYear) => dispatch => {
	dispatch({
		type: VALIDATE_YEARS,
		payload: { minYear, maxYear },
	});
};

export const searchForm = query => dispatch => {
	dispatch({
		type: SEARCH_FILTERS,
		payload: query,
	});
};

export const setSearchFilters = {
	KEYWORDS,
	LAUNCH_PAD,
	MIN_YEAR,
	MAX_YEAR,
};
