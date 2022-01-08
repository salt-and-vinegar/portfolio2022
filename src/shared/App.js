import React, { Component } from 'react';
import {Routes,Route } from 'react-router-dom';
import { Main, About, Work, Contact } from '../pages';

class App extends Component {
    render() {
        return (
            <Routes>
				<Route exact path="/" element={ <Main></Main> } />
				<Route path="/about" element={ <About></About> } />
                <Route path="/works" element={ <Work></Work> } />
                <Route path="/contacts" element={ <Contact></Contact> } />
			</Routes>
        );
    }
}

export default App;