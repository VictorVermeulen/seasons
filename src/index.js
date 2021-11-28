import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class App extends Component {
	render() {
		navigator.geolocation.getCurrentPosition(
			(position) => console.log(position),
			(err) => console.log(err)
		);

		return <div>Latitude:</div>;
	}
}

export default App;

ReactDOM.render(<App />, document.querySelector('#root'));
