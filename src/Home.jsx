// src/Home.js
import React, { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // Simulating fetching posts data
      const dummyPosts = Array.from({ length: ''} ,()=> ({}));
     
      setLoading(false);
    }, 2000); // Simulate delay of 2 seconds
  }, []);

  return (
    <div className="page-container">
      <h1>Home</h1>
      {loading ? (
        <SkeletonLoader type="post" />
      ) : (
       <div className="card-skeleton">
        
        <div className="left-col">
          <img src="https://images.unsplash.com/photo-1715714236867-c6a12f63e458?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tree" width={100} height={100}/>
          <h1>Hello Everyone</h1>
          <p>Hello everyone from Home</p>
        </div>
        <div className="right-col"><img src="https://images.unsplash.com/photo-1715714236867-c6a12f63e458?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tree" width={100} height={100}/>
        <h1>Hello Everyone</h1>
        <p>Hello everyone from Home</p>
        </div>
       </div>
      )}
    </div>
  );
};

export default Home;
