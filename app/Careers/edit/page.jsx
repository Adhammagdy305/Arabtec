"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function CreateForm() {
  const router = useRouter();

  const [blog, setblog] = useState({});
useEffect(() => {
  const fetchData = async () => {
    try {

      console.log("rayeh a3mel fetch");
      const response = await fetch('/api/getOneBlog');
      console.log("Khalast aho");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setblog(data.data[0]);
      console.log(data.data[0]);

      console.log("blog fetched", blog);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  fetchData();
}, []);


  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    console.log(blog);
    Object.entries(blog).forEach(([key, value]) => {
      console.log(key,value);
        formData.append(key, value); // Append other blog data
    });
    try {
      const res = await fetch('/api/editBlog', {
        method: "POST",
        body: formData,
        //body: JSON.stringify(blog)
      });

      if (res.status === 201) {
        router.refresh();
        router.push('/blogs');
      }
    } catch (error) {
      console.error('Error uploading blog:', error);
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

      // Handle other input change
      setblog(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  
  
  
  

  return (
    <form onSubmit={handleSubmit} className="w-1/2" encType="multipart/form-data">
      {Object.keys(blog).map(key => (
        <label key={key}>
          <span>{key}</span>
          {
            <input
              required
              type="text"
              name={key}
              onChange={handleChange}
              value={blog[key]}
            />
            
          }
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
