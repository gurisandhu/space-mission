import 'core-js';

import React from 'react';
import PropTypes from 'prop-types';
import { HeadingTwo, Image, ButtonTwo, TextOne } from '../..';
import { getDate, getTime } from '../../../utls';
import './index.scss';

function Item(props) {
	const headingText = {
		text1: props.rocket.rocket_name,
		text2: props.payloads[0].payload_id,
		failed: !props.launch_success || !props.land_success ? true : false,
	};
	const PadsFullName =
		!props.launchPads.loading &&
		props.launchPads.launchPads.map(item => {
			if (item.id === props.launch_site.site_id) {
				return item.full_name;
			}
		});
	return (
		<div className="Item">
			<Image src={props.flight_number} />
			<div className="itemContent">
				<HeadingTwo {...headingText} />
				<div className="subContent">
					<div>
						<p>
							Launched <b>{getDate(props.launch_date_local)}</b> at{' '}
							<b>{getTime(props.launch_date_local)}</b> from <b> {PadsFullName}</b>
						</p>
					</div>
					<div className="flightNumber">
						<TextOne text={props.flight_number} />
						<p>Flight Number</p>
					</div>
				</div>
				<div className="listTwo">
					{props.links.mission_patch && (
						<ButtonTwo src={props.links.mission_patch} text={'Mission Patch'} />
					)}
					{props.links.reddit_campaign && (
						<ButtonTwo src={props.links.reddit_campaign} text={'Reddit Campaign'} />
					)}
					{props.links.reddit_launch && (
						<ButtonTwo src={props.links.reddit_launch} text={'Reddit Launch'} />
					)}
					{props.links.reddit_recovery && (
						<ButtonTwo src={props.links.reddit_recovery} text={'Reddit Recovery'} />
					)}
					{props.links.reddit_media && (
						<ButtonTwo src={props.links.reddit_media} text={'Reddit Media'} />
					)}
					{props.links.presskit && (
						<ButtonTwo src={props.links.presskit} text={'Presskit'} />
					)}
					{props.links.article_link && (
						<ButtonTwo src={props.links.article_link} text={'Article Link'} />
					)}
					{props.links.video_link && (
						<ButtonTwo src={props.links.video_link} text={'Video Link'} />
					)}
				</div>
			</div>
		</div>
	);
}

export default Item;

Item.propTypes = {
	flight_number: PropTypes.number.isRequired,
	rocket: PropTypes.shape({
		rocket_name: PropTypes.string.isRequired,
	}).isRequired,
	payloads: PropTypes.array.isRequired,
	land_success: PropTypes.bool,
	launch_success: PropTypes.bool,
};

Item.defaultProps = {
	land_success: false,
	launch_success: false,
};
