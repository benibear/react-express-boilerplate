import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomeContainer from './HomeContainer';
import LoginContainer from './LoginContainer';
import Navigation from '../components/Navigation';


class MainContainer extends Component {
    render() {
        return (
            <div>
                <h1>Your App</h1>
                <Navigation isAuthed={this.props.isAuthed} user={this.props.user}/>
                <BrowserRouter>
                    <Route exact path="/" component={LoginContainer} />
                </BrowserRouter>
            </div>
        );  
    }
}

function mapStateToProps (state) {
    return {
        isAuthed: state.isAuthed,
        user: state.user
    }
}

export default connect(mapStateToProps)(MainContainer);