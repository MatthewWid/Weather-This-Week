// Ask for and get the current users' location

function getLocation() {
	if (!("geolocation" in navigator)) {
		console.warn("\"geolocation\" not available in user navigator.");
		return;
	}
}

export default getLocation;