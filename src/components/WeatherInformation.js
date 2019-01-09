import React, {Component} from "react";
import TodayInformation from "./TodayInformation";
import WeekInformation from "./WeekInformation";

class WeatherInformation extends Component {
	render() {
		return (
			<div className="weather-info">
				<TodayInformation current={this.props.current} />
				<WeekInformation forecast={this.props.forecast} />
			</div>
		);
	}
}

export default WeatherInformation;
