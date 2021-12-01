import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

export class App extends Component {
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
		console.log('My component was rendered to the screen');
	}

	componentDidUpdate() {
		console.log('My component was just updated to the screen');
	}

	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error:{this.state.errorMessage}</div>;
		} else if (this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		} else {
			return <div>Loading</div>;
		}
	}
}

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
