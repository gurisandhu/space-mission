import 'core-js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, TextTwo, Select, ButtonOne } from '../../';
import { isEmpty } from '../../../utls';
import { validateYears } from '../../../actions';
import './index.scss';

class FilterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keywords: '',
			launchPad: '',
			minYear: '',
			maxYear: '',
		};
	}

	handleChange = param => {
		this.setState({
			[param.target.name]: param.target.value,
		});
	};

	filterMissions = e => {
		e.preventDefault();
		const { keywords, launchPad, minYear, maxYear } = this.state;
		const formValues = {
			keywords,
			launchPad,
			minYear,
			maxYear,
		};
		this.props.filterMissions(formValues);
	};
	shouldComponentUpdate(nextState, nextProps) {
		return this.state !== nextState && this.props !== nextProps;
	}

	render() {
		const { minYear, maxYear } = this.state;
		const { launchPads, maxYears, minYears } = this.props;
		const padsFullName =
			launchPads.launchPads &&
			launchPads.launchPads.map(item => {
				const eachPad = {};
				eachPad.id = item.id;
				eachPad.text = item.full_name;
				return eachPad;
			});

		return (
			<form
				className="filterForm"
				role="search"
				onSubmit={param => this.filterMissions(param)}
			>
				<div>
					<label htmlFor="keywords">
						<TextTwo text="Keywords" />
						<Input name="keywords" setKeywords={param => this.handleChange(param)} />
					</label>
				</div>
				<div>
					<label htmlFor="launchPad">
						<TextTwo text="Launch Pad" />
						<Select
							name="launchPad"
							setOption={param => this.handleChange(param)}
							options={padsFullName}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="minYear">
						<TextTwo text="Min Year" />
						<Select
							name="minYear"
							setOption={param => this.handleChange(param)}
							options={minYears}
							validate={() => this.props.validateYears(minYear, maxYear)}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="maxYear">
						<TextTwo text="Max Year" />
						<Select
							name="maxYear"
							setOption={param => this.handleChange(param)}
							options={maxYears}
							validate={() => this.props.validateYears(minYear, maxYear)}
						/>
					</label>
				</div>
				<div>
					<ButtonOne text="Apply" onClicked={e => this.filterMissions(e)} />
				</div>
			</form>
		);
	}
}

const getVisibleMaxYears = (maxYears, currentYears) => {
	return maxYears.map(item => {
		if (isEmpty(currentYears.minYear)) {
			item.disabled = false;
		} else {
			if (currentYears.minYear > item.id) {
				item.disabled = true;
			}
			if (currentYears.minYear < item.id) {
				item.disabled = false;
			}
		}
		return item;
	});
};

const getVisibleMinYears = (minYears, currentYears) => {
	return minYears.map(item => {
		if (isEmpty(currentYears.maxYear)) {
			item.disabled = false;
		} else {
			if (currentYears.maxYear < item.id) {
				item.disabled = true;
			}
			if (currentYears.maxYear > item.id) {
				item.disabled = false;
			}
		}
		return item;
	});
};

const mapStateToProps = state => ({
	launches: state.launches,
	maxYears: getVisibleMaxYears(
		state.launches.maxYears,
		state.launches.currentYears,
	),
	minYears: getVisibleMinYears(
		state.launches.minYears,
		state.launches.currentYears,
	),
});

export default connect(
	mapStateToProps,
	{ validateYears },
)(FilterForm);

FilterForm.propTypes = {
	filterMissions: PropTypes.func.isRequired,
	maxYears: PropTypes.array.isRequired,
	minYears: PropTypes.array.isRequired,
	launchPads: PropTypes.object.isRequired,
	validateYears: PropTypes.func.isRequired,
};
