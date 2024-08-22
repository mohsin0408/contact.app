import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from "./EditContact";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  const updateContactHandler = (updatedContact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  return (
    <div className="ui container">
      <Router>
        {isLoggedIn && <Header />}
        <Routes>
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login setIsLoggedIn={setIsLoggedIn}/>}
          />
          <Route

            path="/logout"
          element={isLoggedIn ? ( <Navigate to="/login" /> ) : ( <Logout /> )}/> 

          <Route
            path="/"
            element={isLoggedIn ? (
              <>
                <Header />
                <ContactList contacts={contacts} getContactId={removeContactHandler} setIsLoggedIn={setIsLoggedIn} />
              </>
            ) : (
              <Navigate to="/login" />
            )}
          />
          <Route
            path="/add"
            element={isLoggedIn ? <AddContact addContactHandler={addContactHandler} /> : <Navigate to="/login" />}
          />
          <Route
            path="/edit/:id"
            element={isLoggedIn ? <EditContact contacts={contacts} updateContactHandler={updateContactHandler} /> : <Navigate to="/login" />}
          />
  
        </Routes>
      </Router>
    </div>
  );
}

export default App;



