import React, { Component } from "react";
import Header from "../components/header";
import { readString } from 'react-papaparse'
import csvfile from './works/workslist.csv';
import styles from './styles/Works.module.css';
import WorkCard from "../components/work_card";


class Work extends Component{
	constructor(props){
		super(props);
		this.updateData = this.updateData.bind(this);
	}

	UNSAFE_componentWillMount() {
		readString(csvfile, {
			header : true,
			download: true,
			complete: this.updateData
		});
	  }
	
	  updateData(result) {
		const data = result.data;
		this.setState({data: data}); 
	  }

	render(){	
		let workArr = [];
		if(this.state === null){

		}else{
			let workList = this.state.data;
			for(let i in workList){
				let workName = workList[i].p_name;
				let workSkill = (workList[i].p_skills).split(",");
				let workTime = workList[i].p_time;
				let workPart = workList[i].p_works;
				//여기서 workSkill array는 어떻게 분할해서 리스트로 붙일지 봐야함
				workArr.push(
					<li key={i}>
						<WorkCard name={workName} skill={workSkill} time={workTime} part={workPart}></WorkCard>
					</li>
				);
			}
		}
		return(
			<>
			<Header title="Works"></Header>
			<ul className={styles['works-container']}>
				{workArr}
			</ul>
			</>
		);
	}
}

export default Work;