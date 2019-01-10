import React, {Component} from "react";
import ForecastDayCard from "./ForecastDayCard";
import "./WeekForecast.css";

class WeekInformation extends Component {
	render() {
		// Get the forecast data from noon for today and the next four days
		let days = [];
		this.props.forecast.list.forEach((day) => {
			if (day.dt_txt.split(" ")[1].split(":")[0] === "12") {
				days.push(day);
			}
		});
		
		// const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
		const cards = days.map((day, i) => {
			// Get the name of the day by mapping the date text field number value to the dayNames array
			const dayName = dayNames[(new Date(day.dt_txt)).getDay()];

			return <ForecastDayCard dayName={dayName} weather={day} key={i} index={i} />;
		});

		return (
			<section className="weather-forecast">
				{cards}
			</section>
		);
	}
}

export default WeekInformation;
