import React, {Component} from "react";
import "./TodayInformation.css";

class TodayInformation extends Component {
	render() {
		const weather = this.props.current;
		console.log(weather);

		return (
			<div className="weather-today">
				<p>Temperature: {weather.main.temp}</p>
				<p>Humidity: {weather.main.humidity}</p>
			</div>
		);
	}
}

export default TodayInformation;
