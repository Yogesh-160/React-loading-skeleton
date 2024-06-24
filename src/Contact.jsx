// src/Contact.js
import React, { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // Simulating fetching contact data
      const dummyContacts = Array.from({ length: 4 }, (_, index) => ({
        id: index + 1,
        name: `Contact ${index + 1}`,
        phone: `+123456789${index}`,
        email: `contact${index + 1}@example.com`,
      }));
      setContacts(dummyContacts);
      setLoading(false);
    }, 2000); // Simulate delay of 2 seconds
  }, []);

  return (
    <div className="page-container">
      <h1>Contact</h1>
      {loading ? (
        <SkeletonLoader type="contacts" />
      ) : (
        <div className="contacts">
          {contacts.map(contact => (
            <div key={contact.id} className="contact">
              <h2>{contact.name}</h2>
              <p>Phone: {contact.phone}</p>
              <p>Email: {contact.email}</p>
            </div>
          ))}
          <h2>Hello Everyone , My name is Yogesh Jha!!</h2>
        </div>
      )}
    </div>
  );
};

export default Contact;
