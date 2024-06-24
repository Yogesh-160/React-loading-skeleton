// src/About.js
import React, { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';

const About = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // Simulating fetching users data
      const dummyUsers = Array.from({ length: 3 }, (_, index) => ({
        id: index + 1,
        name: `User ${index + 1}`,
        email: `user${index + 1}@example.com`,
      }));
      setUsers(dummyUsers);
      setLoading(false);
    }, 2000); // Simulate delay of 2 seconds
  }, []);

  return (
    <div className="page-container">
      <h1>About</h1>
      {loading ? (
        <SkeletonLoader type="user" />
      ) : (
        <div className="users">
          {users.map(user => (
            <div key={user.id} className="user">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))}
          
        </div>
      )}
    </div>
  );
};

export default About;
