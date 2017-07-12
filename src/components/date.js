import moment from 'moment';

const date = (_date) => {
	const hoursAgo = moment().diff(_date, 'hours');
	if (hoursAgo < 24) {
		return moment(_date).fromNow();
	}
		return moment(_date).format('MMM DD, YYYY, h:MM a');
}

export default date;