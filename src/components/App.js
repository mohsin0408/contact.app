import React, { useEffect, useState } from 'react';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"
import EditContact from "./EditContact";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(),...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{ return contact.id !== id; });
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
    <Header/>
    <Routes>
      <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>} />  
      <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>}/>
      <Route path='/edit/:id' element={<EditContact contacts={contacts} updateContactHandler={updateContactHandler} />} />
  
    </Routes>
    </Router>
    </div>  
    
  );
}

export default App;


