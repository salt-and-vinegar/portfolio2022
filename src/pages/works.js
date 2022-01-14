import React, { Component } from "react";
import Header from "../components/header";
import { readString } from 'react-papaparse'
import csvfile from './works/workslist.csv';
import styles from './styles/Works.module.css';

class Work extends Component{
	constructor(props){
		super(props)
	}


	render(){
		
		readString(csvfile, {
			header : true,
			download: true,
			complete: function (input) {
				console.log(input)
			}
		});

	
		return(
			<>
			<Header title="Works"></Header>
			</>
		);
	}
}

export default Work;