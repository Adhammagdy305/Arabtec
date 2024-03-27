"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function EditForm() {
  const router = useRouter();

  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getOneBlog');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlog(data.data[0]);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchData();
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/editBlog', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      });

      if (res.status === 201) {
        router.refresh();
        router.push('/blogs');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2" encType="multipart/form-data">
      {Object.keys(blog).map(key => (
        <label key={key}>
          <span>{key}</span>
          <input
            required
            type="text"
            name={key}
            onChange={handleChange}
            value={blog[key]}
          />
        </label>
      ))}
      <button className="btn-primary">
        {isLoading ? <span>Updating...</span> : <span>Update Blog</span>}
      </button>
    </form>
  )
}
