import React,{ Component, useState } from "react";
import styles from '../pages/styles/Works.module.css';

class WorkCard extends Component {
    constructor(props) {
        super(props);
      }

    render(){
        let workSkill = this.props.skill;
        let workSkillArr = [];
        for(let i in workSkill){
            workSkillArr.push(
                <li key={i} className="badge large">
                    {this.props.skill[i]}
                </li>
            );
        }
        return(
            <>
              <div className={styles['works-cont']}>
                 <div className={styles['work-top']}>
                    <span className={styles['works-term']}>{this.props.time}</span>
                    <span className={styles['works-part']}>{this.props.part}</span>
                 </div>
                 <h3 className={styles['works-title']}>{this.props.name}</h3>
                 <ul className={styles['works-skill-wrap']}>{workSkillArr}</ul>
                 <p className={styles['works-detail']}>{this.props.paragraph}</p>
              </div>
            </>
        )
    }
}

export default WorkCard;