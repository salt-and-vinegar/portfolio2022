import { Component } from 'react';
import styles from '../styles/About.module.css';

class Skill extends Component{
  constructor(props){
		super(props)
		this.state = {
			skills:[
				{id : 1, cont : "HTML" },
        {id : 2, cont : "CSS" },
        {id : 3, cont : "JAVASCRIPT" },
        {id : 4, cont : "JQUERY" },
        {id : 5, cont : "SCSS" },
        {id : 6, cont : "REACT" },
        {id : 7, cont : "ANGULAR" },
        {id : 8, cont : "CORDOVA"},
        {id : 9, cont : "CANVAS" },
        {id : 10, cont : "SVG" },
        {id : 11, cont : "GIT" }
			],
      tools:[
        {id : 1, cont : "PHOTOSHOP" },
        {id : 2, cont : "ILLUSTRATOR" },
        {id : 3, cont : "PREMIERE PRO" },
        {id : 4, cont : "AFTER EFFECT" },
        {id : 5, cont : "SKETCH" },
        {id : 6, cont : "POWERPOINT" },
      ]
		}
	}
  render(){
    var skillLists = [];
    var toolLists = [];
		var skills = this.state.skills;
    var tools = this.state.tools;
		var i = 0;
    var j = 0;

		while(i < skills.length){
			var skillTitle = skills[i].cont;
			var skillId = skills[i].id;
			skillLists.push(
				<li 
					key={skillId} 
				>{skillTitle}</li>);
			i = i+1;
		}

    while(j < tools.length){
			var toolTitle = tools[j].cont;
			var toolId = tools[j].id;
			toolLists.push(
				<li 
					key={toolId} 
				>{toolTitle}</li>);
			j = j+1;
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
      <div className={styles['about-cont-right-2']}>
             <ul>
               {skillLists}
             </ul>
             <ul>
               {toolLists}
             </ul>
      </div>
      </>
    );
  }
}

export default Skill;