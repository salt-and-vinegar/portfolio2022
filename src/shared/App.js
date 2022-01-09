import React, { Component } from 'react';
import {Routes,Route } from 'react-router-dom';
// import GlobalStyles from "../components/globalStyles";
import { Main, About, Work, Contact } from '../pages';

class App extends Component {
    render() {
        return (
            <>
            <Routes>
				<Route exact path="/" element={ <Main></Main> } />
				<Route path="/about" element={ <About></About> } />
                <Route path="/works" element={ <Work></Work> } />
                <Route path="/contacts" element={ <Contact></Contact> } />
			</Routes>
            {/* <GlobalStyles /> */}
            </>
        );
    }
}

export default App;