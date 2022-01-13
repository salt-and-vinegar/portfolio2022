import { Component } from 'react';
import styles from '../styles/About.module.css';

class Personal extends Component{
  render(){
    return(
        <>
        <div className={styles['about-cont-left']}>
            <div>
                <h2 className={styles['about-cont-title']} style={{whiteSpace: "pre-wrap"}}>
                    {this.props.title}
                </h2>
                <div className={styles['about-cont-info']}>
                    <p>NAYOUNG KIM/김나영/1992.05.29</p>
                    <p>FRONT END DEVELOPER & UI/UX DESIGNER</p>
                    <ul>
                        <li><span className='badge'>Email</span>mwmstinc@gmail.com</li>
                        <li><span className='badge'>Mobile</span>+821028386417</li>
                        <li><span className='badge'>Instagram</span>salt.and.vinegar_portfolio</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles['about-cont-right'] + " right"}>
                <img src='/personal_image.jpg' alt="personal Image" />
                <p>
                        <b>I’m Nayoung Kim, front-end developer & UI/UX designer</b><br />
                        My strength is Adaptability and Flexibility. It obviously help me<br />
                        to learn new things super fast and can easily adapt it to work<br />
                        Solving a problem Tenaciously is one thing I like to do at work
                </p>
                <p>
                        <b>안녕하세요. 프론트엔드 개발자 겸 웹디자이너 김나영입니다</b><br />
                        제 장점은 적응력과 유연성으로 제가 새로운 것을 빨리 습득하고<br />
                        그를 다시 업무에 적용하여 사용할 수 있도록 합니다<br />
                        문제가 풀리지 않으면 끈질기게 매달려 풀어내는 것을 좋아합니다
                </p>
    
        </div>
        </>
    );
  }
}

export default Personal;