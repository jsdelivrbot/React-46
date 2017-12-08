import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_Key = 'AIzaSyCAyX88dbV4aoKaftekdl4_j8L1A_gx6I8';

YTSearch({key : API_Key, trem : 'surfboards'}, function(data){
	console.log(data);
});

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));