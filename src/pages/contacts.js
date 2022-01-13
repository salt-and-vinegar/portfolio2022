import React, {Component} from "react";
import Header from "../components/header";
import ContactForm from "../components/contact_form";

class Contact extends Component{
    render(){
        return(
            <>
            <Header title="Contacts"></Header>
            <ContactForm></ContactForm>
            </>
        );
    }
}


export default Contact;