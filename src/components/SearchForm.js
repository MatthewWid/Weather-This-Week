import React, {Component} from "react";
import "./SearchForm.css";

class SearchForm extends Component {
	render() {
		return (
			<div className="search-form">
				<input type="text" className="search-form__input" placeholder="Search for a city..." onKeyDown={this.props.searchLocation} />
			</div>
		);
	}
}

export default SearchForm;
