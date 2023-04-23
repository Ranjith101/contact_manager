import React,{ useState, useEffect } from 'react';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  const addContact = (name, phone) => {
    const newContact = {
      id: contacts.length + 1,
      name,
      phone,
    };
    setContacts([...contacts, newContact]);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <ContactList contacts={contacts} />
      <ContactForm addContact={addContact} />
    </div>
  );
};

export default App;