"use client"

//import { useRouter } from "next/navigation";
//import { useState } from "react";
//
//export default function CreateForm() {
//  const router = useRouter();
//
//  const [project, setProject] = useState({
//    Day: '',
//    Month: '',
//    Year: '',
//    Name_en: '',
//    Service_en: '',
//    Location_en: '',
//    Prj_Description_en: '',
//    Alt_Img_PP_en: '',
//    Second_Description_en: '',
//    Proj_Keywords_en: '',
//    Name_ar: '',
//    Service_ar: '',
//    Location_ar: '',
//    Prj_Description_ar: '',
//    Alt_Img_PP_ar: '',
//    Second_Description_ar: '',
//    Proj_Keywords_ar: '',
//    Coverimg: null, // Initialize with null
//    Thumbnail: null, // Initialize with null
//    Gallery: [] // Initialize with empty array
//  });
//
//  const [isLoading, setIsLoading] = useState(false);
//
//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    setIsLoading(true);
//
//    const formData = new FormData();
//    Object.entries(project).forEach(([key, value]) => {
//      console.log(key,value);
//      if (key === 'Coverimg' || key === 'Thumbnail') {
//        formData.append(key, value); // Append file to FormData
//      } else if (key === 'Gallery' && Array.isArray(value)) {
//        value.forEach(file => formData.append(key, file)); // Append multiple files to FormData
//      } else {
//        formData.append(key, value); // Append other project data
//      }
//    });
//    
//
//    try {
//      const res = await fetch('/api/uploadProject', {
//        method: "POST",
//        body: formData,
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
//    const { name, value, files } = e.target;
//    if (name === 'Year' || name === 'Month' || name === 'Day') {
//      // Handle date input change
//      setProject(prevState => ({
//        ...prevState,
//        [name]: value
//      }));
//    } /*else if (files) {
//      // Handle file input change
//      setProject(prevState => ({
//        ...prevState,
//        [name]: files[0] // Assuming single file input
//      }));
//    } */else {
//      // Handle other input change
//      setProject(prevState => ({
//        ...prevState,
//        [name]: value
//      }));
//    }
//  }
//  
//  
//  
//
//  const handleChange_Date = (e, field) => {
//    const { value } = e.target;
//    setProject(prevState => ({
//      ...prevState,
//      [field]: value
//    }));
//  }
//  
//
//  return (
//    <form onSubmit={handleSubmit} className="w-1/2" encType="multipart/form-data">
//      {Object.keys(project).map(key => (
//        <label key={key}>
//          <span>{key}</span>
//          {key === 'Day' ? (
//              <input
//                required
//                type="number"
//                name="Day"
//                placeholder="Day"
//                min="1"
//                max="31"
//                onChange={handleChange}
//                value={project.Day}
//              /> ) : key === 'Month'  ? (
//              <input
//                required
//                type="number"
//                name="Month"
//                placeholder="Month"
//                min="1"
//                max="12"
//                onChange={handleChange}
//                value={project.Month}
//              />) : key === 'Year'  ? (
//              <input
//                required
//                type="number"
//                name="Year"
//                placeholder="Year"
//                min="1950"
//                max="2030"
//                onChange={handleChange}
//                value={project.Year}
//              />
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

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [project, setProject] = useState({
    Day: '',
    Month: '',
    Year: '',
    Name_en: '',
    Service_en: '',
    Location_en: '',
    Prj_Description_en: '',
    Alt_Img_PP_en: '',
    Second_Description_en: '',
    Proj_Keywords_en: '',
    Name_ar: '',
    Service_ar: '',
    Location_ar: '',
    Prj_Description_ar: '',
    Alt_Img_PP_ar: '',
    Second_Description_ar: '',
    Proj_Keywords_ar: '',
    Coverimg: '', // Initialize with empty string
    Thumbnail: '', // Initialize with empty string
    Gallery: [] // Initialize with empty array
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/uploadProject', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(project),
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

    setProject(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      {Object.keys(project).map(key => (
        <label key={key}>
          <span>{key}</span>
          <input
            required
            type="text"
            name={key}
            onChange={handleChange}
            value={project[key]}
          />
        </label>
      ))}
      <button className="btn-primary">
        {isLoading ? <span>Adding...</span> : <span>Add Project</span>}
      </button>
    </form>
  )
}
