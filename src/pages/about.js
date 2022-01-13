import React,{Component} from "react";
import Header from "../components/header";
import Personal from "./about/Personal";
import Skill from "./about/Skills"
import Edu from "./about/Edu"
import styles from './styles/About.module.css';

class About extends Component{
	constructor(props){
		super(props)
		this.state = {
			mode : 'personal',
			selected_type_id : 0,
			about_cont:[
				{id : 1, href:"personal", title:"Personal \nInformation", innerTitle:"Personal Information\nand Strength", innerCont:"어쩌고"},
				{id : 2, href:"skills", title:"Skills&Tools", innerTitle:"Skills\nand Tools", innerCont:"어쩌고"},
				{id : 3, href:"education", title:"Education \n&Career", innerTitle:"Education\nand Career", innerCont:"어쩌고"}
			]
		}
	}

	render(){
		var lists = [];
		var data = this.state.about_cont;
		var i = 0;

		while(i < data.length){
			var dataTitle = data[i].title;
			var dataId = data[i].id;
			var isActive = i === Number(this.state.selected_type_id);
			lists.push(
				<li 
					key={dataId} 
				><a 
					href={"/about/"+data[i].href} 
					data-no={i} 
					data-type={data[i].href}
					className={ isActive ? styles.active : ''}
					style={{whiteSpace: "pre-wrap",textDecoration:"none"}} onClick={function(e){
				e.preventDefault();
				this.setState({
					mode:e.target.dataset.type,
					selected_type_id:e.target.dataset.no,
				});
			}.bind(this)}>{dataTitle}</a></li>);
			i = i+1;
		}
		var _title = data[this.state.selected_type_id].innerTitle;
		var _cont = null;
		if(this.state.selected_type_id === "0"){
			_cont = <Personal title={_title}></Personal>
		}else if(this.state.selected_type_id === "1"){
			_cont = <Skill title={_title}></Skill>
		}else if(this.state.selected_type_id === "2"){
			_cont = <Edu title={_title}></Edu>
		}else{
			_cont = <Personal title={_title}></Personal>
		}

		return(
			<>
			<Header title="About"></Header>
			<div className={styles['about-container']}>
				<div className={styles['about-menu']}>
					<ul>
						{lists}
					</ul>
				</div><div
				className={styles['about-cont']} data={this.state.content}>
					{_cont}
				</div>
			</div>
			</>
		);
	}
}

export default About;