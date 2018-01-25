import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = {term: ''};

        /*
         * we bind the onInputChange to this. this is because we are passing a callback int the onchange event. 
        */
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit (event) {
        event.preventDefault();

        //We need to fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});

    }

    render (){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    onChange={this.onInputChange} 
                    value={this.state.term} 
                    className="form-control"
                    placeholder="Get a five day forecast in you favorite cities" 
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"> Submit </button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);