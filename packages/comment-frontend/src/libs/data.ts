export function dateToString(date: string): string {
	console.log(date);
	const diff = new Date().getTime() - new Date(date).getTime();
	let prefix: number;
	let postfix: string;

	if (diff < 60 * 1000) {
		// < 1min
		prefix = diff / 1000;
		postfix = "seconds";

	} else if (diff < 60 * 60 * 1000) {
		// < 1hour
		prefix = diff / (60 * 1000);
		postfix = "minutes";

	} else if (diff < 24 * 60 * 60 * 1000) {
		// < 1day
		prefix = diff / (60 * 60 * 1000);
		postfix = "hours";

	} else if (diff < 7 * 24 * 60 * 60 * 1000) {
		// < 1week
		prefix = diff / (24 * 60 * 60 * 1000);
		postfix = "days";

	} else if (diff < 5 * 7 * 24 * 60 * 60 * 1000) {
		// < 1month
		prefix = diff / (7 * 24 * 60 * 60 * 1000);
		postfix = "weeks";

	} else if (diff < 365 * 24 * 60 * 60 * 1000) {
		// < 1year
		prefix = diff / (5 * 7 * 24 * 60 * 60 * 1000);
		postfix = "months";

	} else {
		// else
		prefix = diff / (365 * 24 * 60 * 60 * 1000);
		postfix = "years";

	}

	return `${Math.round(prefix)} ${postfix} ago`;
}
