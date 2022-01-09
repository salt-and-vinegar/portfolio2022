import React,{ Component } from "react";

class ContactForm extends Component {

    render(){
        return(
            <div className="form-wrap">
                <form>
                    <h2 className="form-big-title">Contact me from here</h2>
                    <button id="form-send-btn">Click here to send</button>
                    <div className="form-container">
                        <div className="form-left">
                            <ul>
                                <li>
                                    <div className="form-title nec">Sender's Email Address</div>
                                    <div className="form-cont">
                                        <input type='email' placeholder="salt_and_vinegar@contact.com"></input>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-title nec">How can I help you?</div>
                                    <div className="form-cont type2">
                                        <select></select>
                                        <input type='text' placeholder="Additional"></input>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-title">Sender's Mobile Number</div>
                                    <div className="form-cont">
                                        <input type='tel' placeholder="00000000000"></input>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-title nec">Title</div>
                                    <div className="form-cont">
                                        <input type='text' placeholder="Title for mail"></input>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="form-right">
                    
                            <div className="form-title nec">Details</div>
                            <div className="form-cont">
                                <textarea placeholder="Anything else you'd like me to know?"></textarea>
                            </div>
                                
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm;