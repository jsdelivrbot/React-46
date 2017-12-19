//import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';

import {FetchElement} from '../actions';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.FetchElement();
    }

    renderPost() {

    }

    render() {
        return (
            <div>
                list
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {element : state.posts};
}

export default connect(mapStateToProps, {FetchElement})(PostsIndex);