"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [admin, setadmin] = useState({
    Username: '',
    Password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    Object.entries(admin).forEach(([key, value]) => {
      console.log(key,value);

        formData.append(key, value); // Append other admin data
      
    });
    

    try {
      const res = await fetch('/api/loginAdmin', {
        method: "POST",
        body: formData,
      });

      if (res.status === 201) {
        router.refresh();
        router.push('/admin');
      }
    } catch (error) {
      console.error('Error uploading admin:', error);
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

      // Handle other input change
      setadmin(prevState => ({
        ...prevState,
        [name]: value
      }));
    }


  return (
    <form onSubmit={handleSubmit} className="w-1/2" encType="multipart/form-data">
      {Object.keys(admin).map(key => (
        <label key={key}>
          <span>{key}</span>
          {(
            <input
              required
              type="text"
              name={key}
              onChange={handleChange}
              value={admin[key]}
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
