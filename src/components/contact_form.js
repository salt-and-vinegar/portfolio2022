import React,{ Component, useState } from "react";
import emailjs, { init } from '@emailjs/browser';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sender_email:"",
            how_can_i_help:"",
            mobile:"",
            title:"",
            messeage:""
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleSubmit(event) {
        var templateParams = {
            sender_email:this.state.sender_email,
            how_can_i_help:this.state.how_can_i_help,
            mobile:this.state.mobile,
            title:this.state.title,
            messeage:this.state.messeage
        };

       

        event.preventDefault();
      }

    render(){

        return(
            <div className="form-wrap">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="form-big-title">Contact me from here</h2>
                    <button type="submit" id="form-send-btn">Click here to send</button>
                    <div className="form-container">
                        <div className="form-left">
                            <ul>
                                <li>
                                    <div className="form-title nec">Sender's Email Address</div>
                                    <div className="form-cont">
                                        <input 
                                            type='email' 
                                            name='sender_email'
                                            value={this.state.sender_email}
                                            placeholder="salt_and_vinegar@contact.com"
                                            onChange={this.handleInputChange}
                                        ></input>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-title nec">How can I help you?</div>
                                    <div className="form-cont">
                                        <input 
                                            type='text' 
                                            name='how_can_i_help'
                                            value={this.state.how_can_i_help}
                                            placeholder="e.g)Job Offer, Collaboration etc"
                                            onChange={this.handleInputChange}
                                        ></input>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-title">Sender's Mobile Number</div>
                                    <div className="form-cont">
                                        <input 
                                            type='tel' 
                                            name='mobile'
                                            value={this.state.mobile}
                                            placeholder="00000000000"
                                            onChange={this.handleInputChange}
                                        ></input>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-title nec">Title</div>
                                    <div className="form-cont">
                                        <input 
                                            type='text' 
                                            name='title'
                                            value={this.state.title}
                                            placeholder="Title for mail"
                                            onChange={this.handleInputChange}
                                        ></input>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="form-right">
                    
                            <div className="form-title nec">Details</div>
                            <div className="form-cont">
                                <textarea 
                                    name='message'
                                    value={this.state.message}
                                    placeholder="Anything else you'd like me to know?"
                                    onChange={this.handleInputChange}
                                ></textarea>
                            </div>
                                
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ContactForm;