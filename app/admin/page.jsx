// pages/admins.js
"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from 'react';

const adminsPage = () => {
  const [admins, setadmins] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {

        console.log("rayeh a3mel fetch");
        const response = await fetch('/api/getAdmin');
        console.log("Khalast aho");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setadmins(data.data);
        console.log(data, data.data);
      } catch (error) {
        console.error('Error fetching admins:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>admins</h1>
      <ul>
        {admins.map(admin => (
          <li key={admin._id} >
            <h2>{admin.Username}</h2>
            <p>{admin.Level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default adminsPage;