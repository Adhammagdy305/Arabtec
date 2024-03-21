// pages/projects.js
"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from 'react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {

        console.log("rayeh a3mel fetch");
        const response = await fetch('/api/getProjects');
        console.log("Khalast aho");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data.data);
        console.log(data, data.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            <h2>{project.Name_en}</h2>
            <p>{project.Prj_Description_en}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;