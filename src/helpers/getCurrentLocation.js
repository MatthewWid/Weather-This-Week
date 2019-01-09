// Ask for and get the current users' location

function getLocation() {
	if (!("geolocation" in navigator)) {
		console.warn("\"geolocation\" not available in user navigator.");
		return;
	}

	// https://stackoverflow.com/a/22519785/2954591
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

export default getLocation;