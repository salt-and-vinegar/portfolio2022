import React,{ Component, useState } from "react";
import styles from '../pages/styles/Works.module.css';

class WorkCard extends Component {
    constructor(props) {
        super(props);
      }

    render(){
        
        let workSkill = this.props.skill
        let workSkillArr = [];
        for(let i in workSkill){
            workSkillArr.push(
                <li className="badge">
                    {this.props.skill[i]}
                </li>
            );
        }
        return(
            <>
              <div className={styles['works-cont']}>
                 <span className={styles['works-term']}>{this.props.time}</span>
                 <span className={styles['works-part']}>{this.props.part}</span>
                 <h3>{this.props.name}</h3>
                 <ul>{workSkillArr}</ul>
                 <p></p>
              </div>
            </>
        )
    }
}

export default WorkCard;