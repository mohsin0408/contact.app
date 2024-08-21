import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate(); 

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || number === "") {
      alert("All fields are mandatory");
      return;
    }
    
    addContactHandler({ name, email, number });
    setName("");
    setEmail("");
    setNumber("");
    navigate("/"); 
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add} autoComplete="off">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="number">Number</label>
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>        
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;




