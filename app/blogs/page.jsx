// pages/blogs.js
"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from 'react';

const blogsPage = () => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {

        console.log("rayeh a3mel fetch");
        const response = await fetch('/api/getBlog');
        console.log("Khalast aho");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data.data);
        console.log(data, data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id} >
            <h2>{blog.Title_en}</h2>
            <p>{blog.Category_en}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blogsPage;