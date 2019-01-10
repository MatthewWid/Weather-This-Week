import React, {Component} from "react";
import ForecastDayCard from "./ForecastDayCard";

class WeekInformation extends Component {
	render() {
		console.log(this.props);

		return (
			<section className="weather-forecast">
				<ForecastDayCard />
			</section>
		);
	}
}

export default WeekInformation;
