import React, { useState } from "react";

/**
 * ContactList component renders a list of contacts and allows adding new ones.
 */
function ContactList() {
  // Initial contacts array
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
  ]);

  // State for controlled form inputs
  const [newContact, setNewContact] = useState({ name: "", email: "" });

  // Add a new contact to the list
  const addContact = (e) => {
    e.preventDefault();
    if (!newContact.name || !newContact.email) return alert("Please fill out all fields.");

    // Add contact with a unique id
    const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
    setContacts([...contacts, { id: newId, ...newContact }]);

    // Reset the form
    setNewContact({ name: "", email: "" });
  };

  return (
    <div>
      <h1>Contact List</h1>

      {/* Form to add a new contact */}
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newContact.email}
          onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
        />
        <button type="submit">Add Contact</button>
      </form>

      {/* Render the contact list */}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

