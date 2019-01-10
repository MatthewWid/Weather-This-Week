import React, {Component} from "react";
import "./LoadingIndicator.css";

class LoadingIndicator extends Component {
	render() {
		return (
			<div className="loading-indicator">
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	}
}

export default LoadingIndicator;
