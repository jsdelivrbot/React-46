import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_Key = 'AIzaSyCAyX88dbV4aoKaftekdl4_j8L1A_gx6I8';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));