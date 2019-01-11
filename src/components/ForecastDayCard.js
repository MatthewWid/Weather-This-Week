import React, {Component} from "react";
import "./ForecastDayCard.css";

class ForecastDayCard extends Component {
	render() {
		return (
			<div className="weather-forecast-card">
				<div className={`weather-forecast-card__day${this.props.index === 0 ? " weather-forecast-card__day--underline" : ""}`}>
					{this.props.dayName}
				</div>
				<img src={`http://openweathermap.org/img/w/${this.props.weather.weather[0].icon}.png`} className="weather-forecast-card__image" title={this.props.weather.weather[0].description} alt={this.props.weather.weather[0].description} />
				<div className="weather-forecast-card__temp">
					{parseInt(this.props.weather.main.temp)}°C
				</div>
			</div>
		);
	}
}

export default ForecastDayCard;
