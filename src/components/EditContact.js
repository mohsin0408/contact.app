// EditContact.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = ({ contacts, updateContactHandler }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({ name: "", email: "", number: "" });

    useEffect(() => {
        const contactToEdit = contacts.find(contact => contact.id === id);
        if (contactToEdit) { setContact(contactToEdit); }}, [id, contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(prevContact => ({ ...prevContact, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact.name === "" || contact.email === "" || contact.number === "") {
            alert("All fields are mandatory");
            return;
        }
        updateContactHandler(contact);
        navigate("/");
    };

    return (
        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={contact.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={contact.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="number">Number</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        placeholder="Number"
                        value={contact.number}
                        onChange={handleChange}
                    />
                </div>
                <button className="ui button blue">Update</button>
            </form>
        </div>
    );
};

export default EditContact;





