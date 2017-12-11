import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC6jSRt4V9PkPks_r2RjOAZl0U2RGypKd4';
            
class App extends Component{
	constructor(props) {
		super(props);

		this.state = {
			videos : [],
			selectedVideo : null
		};

		this.videoSearch('hobbit');
	}

	videoSearch(term) {
		YTSearch({key : API_KEY, trem : term}, (videos) => {
			console.log('YT', term);
			
			this.setState({
				videos : videos,
				selectedVideo : videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));