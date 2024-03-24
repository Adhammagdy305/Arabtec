"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function CreateForm() {
  const router = useRouter();

  const [project, setProject] = useState({});
useEffect(() => {
  const fetchData = async () => {
    try {

      console.log("rayeh a3mel fetch");
      const response = await fetch('/api/getOneProject');
      console.log("Khalast aho");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProject(data.data[0]);
      console.log(data.data[0].St_Date[0], data.data[0].St_Date[1], data.data[0].St_Date[2]);

      console.log("Project fetched", project);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  fetchData();
}, []);


  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    console.log(project);
    Object.entries(project).forEach(([key, value]) => {
      console.log(key,value);
        formData.append(key, value); // Append other project data
    });
    try {
      const res = await fetch('/api/editProject', {
        method: "POST",
        body: formData,
        //body: JSON.stringify(project)
      });

      if (res.status === 201) {
        router.refresh();
        router.push('/projects');
      }
    } catch (error) {
      console.error('Error uploading project:', error);
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Year' || name === 'Month' || name === 'Day') {
      // Handle date input change
      setProject(prevState => ({
        ...prevState,
        name: {
          ...prevState.name,
          [name]: value
        }
      }));
    } else {
      // Handle other input change
      setProject(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  }
  
  
  

  return (
    <form onSubmit={handleSubmit} className="w-1/2" encType="multipart/form-data">
      {Object.keys(project).map(key => (
        <label key={key}>
          <span>{key}</span>
          {key === 'St_Date' ? (
              <input
              required
              type="text"
              name={key}
              onChange={handleChange}
              value={project[key]}
            /> 
          ) : (
            <input
              required
              type="text"
              name={key}
              onChange={handleChange}
              value={project[key]}
            />
            
          )}
        </label>
      ))}
      <button
        className="btn-primary"
        //disabled={isLoading}
      >
        {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}
      </button>
    </form>
  )
}

//"use client"
//
//import { useRouter } from "next/navigation";
//import { useState, useEffect } from "react";
//
//export default function CreateForm() {
//  const router = useRouter();
//
//  const [project, setProject] = useState({});
//  useEffect(() => {
//    const fetchData = async () => {
//      try {
//        console.log("rayeh a3mel fetch");
//        const response = await fetch('/api/getOneProject');
//        console.log("Khalast aho");
//        if (!response.ok) {
//          throw new Error('Network response was not ok');
//        }
//        const data = await response.json();
//        const fetchedProject = data.data[0];
//        setProject({
//          ...fetchedProject,
//          Year: fetchedProject.St_Date[0],
//          Month: fetchedProject.St_Date[1],
//          Day: fetchedProject.St_Date[2]
//        });
//        console.log("Project fetched", project);
//      } catch (error) {
//        console.error('Error fetching projects:', error);
//      }
//    };
//
//    fetchData();
//  }, []);
//
//  const [isLoading, setIsLoading] = useState(false);
//
//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    setIsLoading(true);
//
//    const formData = new FormData();
//    console.log(project);
//    Object.entries(project).forEach(([key, value]) => {
//      console.log(key, value);
//      formData.append(key, value); // Append other project data
//    });
//
//    try {
//      const res = await fetch('/api/editProject', {
//        method: "POST",
//        body: formData,
//        //body: JSON.stringify(project)
//      });
//
//      if (res.status === 201) {
//        router.refresh();
//        router.push('/projects');
//      }
//    } catch (error) {
//      console.error('Error uploading project:', error);
//      setIsLoading(false);
//    }
//  }
//
//  const handleChange = (e) => {
//    const { name, value } = e.target;
//    if (name === 'Year' || name === 'Month' || name === 'Day') {
//      // Handle date input change
//      setProject(prevState => ({
//        ...prevState,
//        St_Date: {
//          ...prevState.St_Date,
//          [name]: value
//        }
//      }));
//    } else {
//      // Handle other input change
//      setProject(prevState => ({
//        ...prevState,
//        [name]: value
//      }));
//    }
//  }
//
//  return (
//    <form onSubmit={handleSubmit} className="w-1/2" encType="multipart/form-data">
//      {Object.keys(project).map(key => (
//        <label key={key}>
//          <span>{key}</span>
//          {key === 'St_Date' ? (
//            <div>
//              <input
//                required
//                type="number"
//                name="Day"
//                placeholder="Day"
//                min="1"
//                max="31"
//                onChange={handleChange}
//                value={project.St_Date[2]}
//              />
//              <input
//                required
//                type="number"
//                name="Month"
//                placeholder="Month"
//                min="1"
//                max="12"
//                onChange={handleChange}
//                value={project.St_Date[1]}
//              />
//              <input
//                required
//                type="number"
//                name="Year"
//                placeholder="Year"
//                min="1950"
//                max="2030"
//                onChange={handleChange}
//                value={project.St_Date[0]}
//              />
//            </div>
//          ) : (
//            <input
//              required
//              type="text"
//              name={key}
//              onChange={handleChange}
//              value={project[key]}
//            />
//          )}
//        </label>
//      ))}
//      <button
//        className="btn-primary"
//        //disabled={isLoading}
//      >
//        {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}
//      </button>
//    </form>
//  )
//}
//