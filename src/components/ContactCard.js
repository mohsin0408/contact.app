import React from "react";
import user from "./images/user.png";
import { useNavigate } from "react-router-dom";


const ContactCard = (props) => {
    const { id, name, email, number, } = props.contact;
    const navigate = useNavigate();

    const handleEditClick = () => { navigate(`/edit/${id}`); };

    return (
        <div className="item">
            <div className="content">
            <div>
            <img className="ui avatar image" src={user} alt="user" />
            </div>
            <div className="header">
                <div>{name}</div>
                <div>{email}</div>
                <div>{number}</div>
            </div>    
            </div>
            <div>
            <i
                className="trash alternate outline icon"  
                style={{ color: "red", marginTop: "7px", marginLeft:"5px"}}  
                onClick={() => props.clickHandler(id)} 
            ></i>
            <i
                className="edit alternate outline icon"  
                style={{ color: "blue", marginTop: "7px"}}  
                onClick={handleEditClick} 
            ></i>
            </div>
        </div>
    );
};

export default ContactCard;


