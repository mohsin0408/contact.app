import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import Logout from "./Logout";

const ContactList = (props) => {
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts?.map((contact)=>{
        return(
            <ContactCard 
            contact={contact} 
            clickHandler={deleteContactHandler}  
            key={contact.id}/>
        );
    })

    return(
        <div className="list">
        <div className="box">     
        <h2> Contact List </h2>
        <Link to="/add" >
        <button className="ui button blue right"> Add Button </button>
        </Link> 
        <Logout setIsLoggedIn={props.setIsLoggedIn} />  
        </div>
        <div className="ui celled-list">{renderContactList}</div>
        </div>
    )
}

export default ContactList;


