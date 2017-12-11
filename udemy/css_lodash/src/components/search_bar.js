import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }
  
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInptChange(event.target.value)}/>
      </div>
    );
  }

  onInptChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
    
		console.log(term);
  }
}

export default SearchBar;