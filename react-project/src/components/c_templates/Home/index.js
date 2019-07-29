import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLaunches, getLaunchPads, searchForm } from '../../../actions';
import { Banner, FilterForm, List, Footer, Loader } from '../..';
import { isEmpty, getYear } from '../../../utls';

class Home extends Component {
	constructor(props) {
		super(props);
		this.scrollTop = React.createRef();
		this.scrollToFilter = React.createRef();
	}
	componentDidMount() {
		this.props.getLaunches();
		this.props.getLaunchPads();
	}

	goToTop = () => {
		this.scrollTop.current.scrollIntoView({ behavior: 'smooth' });
	};
	goToFilter = () => {
		this.scrollToFilter.current.scrollIntoView({ behavior: 'smooth' });
	};
	shouldComponentUpdate(nextState, nextProps) {
		return this.state !== nextState && this.props !== nextProps;
	}
	render() {
		const { launches, launchPads, loading } = this.props;

		let pageContent = '';
		if (loading) {
			pageContent = (
				<>
					<div className="center">
						<b>Loading . . .</b>
					</div>
					<Loader fullScreen />
				</>
			);
		} else {
			pageContent = (
				<>
					<div className="center">
						<b>
							{!isEmpty(launches)
								? `Showing ${launches.length} Mission${launches.length > 1 ? 's' : ''}`
								: 'No Mission available'}
						</b>
					</div>
					<List launches={launches} launchPads={launchPads} />
				</>
			);
		}

		return (
			<>
				<Banner scrollRef={this.scrollTop} goToFilter={() => this.goToFilter()} />
				<div className="wrapper" role="main">
					<section className="container" ref={this.scrollToFilter}>
						<FilterForm
							filterMissions={filters => this.props.searchForm(filters)}
							launchPads={launchPads}
						/>

						<div className="wrapper white">{pageContent}</div>
						{/* Wrapper */}
						<Footer role="contentinfo" goToTop={() => this.goToTop()} />
					</section>
					{/* Container */}
				</div>
				{/* Wrapper */}
			</>
		);
	}
}

const getFiltered = (launches, searchFilters) => {
	const { keywords, launchPad, maxYear, minYear } = searchFilters;
	let dataSearched = launches.launches;
	if (
		isEmpty(keywords) &&
		isEmpty(launchPad) &&
		isEmpty(minYear) &&
		isEmpty(maxYear)
	) {
		return launches.launches;
	} else {
		if (!isEmpty(keywords)) {
			dataSearched = dataSearched.filter(
				item =>
					item.flight_number.toString().search(keywords.toString()) !== -1 ||
					item.rocket.rocket_name.toLowerCase().search(keywords.toString()) !== -1 ||
					item.payloads[0].payload_id
						.toLowerCase()
						.search(keywords.toLowerCase()) !== -1,
			);
		}

		if (!isEmpty(launchPad)) {
			dataSearched = dataSearched.filter(
				item =>
					item.launch_site.site_id.toLowerCase().search(launchPad.toLowerCase()) !==
					-1,
			);
		}

		if (!isEmpty(minYear) || !isEmpty(maxYear)) {
			dataSearched = dataSearched.filter(item => {
				const makeYear = getYear(item.launch_date_local);
				if (isEmpty(maxYear)) {
					return makeYear >= minYear;
				} else if (isEmpty(minYear)) {
					return makeYear <= maxYear;
				} else {
					return makeYear >= minYear && makeYear <= maxYear;
				}
			});
		}

		return dataSearched;
	} /// IF ALL EMPTY OR NOT
};

const mapStateToProps = state => ({
	launches: getFiltered(state.launches, state.launches.searchFilters),
	launchPads: state.launchPads,
	loading: state.launches.loading,
});

export default connect(
	mapStateToProps,
	{ getLaunches, getLaunchPads, searchForm },
)(Home);

Home.propTypes = {
	launches: PropTypes.array.isRequired,
	launchPads: PropTypes.object.isRequired,
	getLaunches: PropTypes.func.isRequired,
	getLaunchPads: PropTypes.func.isRequired,
	searchForm: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};
