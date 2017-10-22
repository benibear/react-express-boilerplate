import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeContainer from './HomeContainer';

function MainContainer () {
	return (
        <div>
            <div>MAIN</div>
            <BrowserRouter>
                <Route exact path="/" component={HomeContainer} />
    		</BrowserRouter>
        </div>
	)
}

export default MainContainer;