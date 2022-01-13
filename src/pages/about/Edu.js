import { Component } from 'react';
import styles from '../styles/About.module.css';

class Edu extends Component{
  constructor(props){
		super(props)
		this.state = {
			edus:[
				{id : 1, term : "2011.02 - 2018.02", place : "KANGWON NATIONAL UNIVERSITY, REPUBLIC OF KOREA", title : "BACHELOR OF VISUAL CULTURE"},
        {id : 2, term : "2018.07 - 2018.12", place : "GREEN COMPUTER ACADEMY, REPUBLIC OF KOREA", title : "FRONT END / WEB PUBLISHER COURSE"},
        {id : 3, term : "2019.01 -2019.04", place : "NEO STORE, REPUBLIC OF KOREA", title : "UI/UX DESIGNER & FRONT END DEVELOPER"},
        {id : 4, term : "2019.08 - 2021.08", place : "IT7, REPUBLIC OF KOREA", title : "UI/UX DESIGNER & FRONT END DEVELOPER"}
			]
		}
	}
  render(){
    var eduLists = [];
		var edus = this.state.edus;
		var i = 0;

		while(i < edus.length){
      var eduId = edus[i].id;
			var eduTerm = edus[i].term;
			var eduPlace = edus[i].place;
      var eduTitle = edus[i].title;
			eduLists.push(
				<li 
					key={eduId} 
				>
          <p>
            <span className='eduTerm'>{eduTerm}</span><br />
            {eduPlace}<br />
            {eduTitle}
          </p>
        </li>);
			i = i+1;
		}
    return(
      <>
      <div className={styles['about-cont-left']}>
          <div>
              <h2 className={styles['about-cont-title']} style={{whiteSpace: "pre-wrap"}}>
                  {this.props.title}
              </h2>
          </div>
      </div>
      <div className={styles['about-cont-right-3']}>
             <ul>
               {eduLists}
             </ul>
      </div>
      </>
    );
  }
}

export default Edu;