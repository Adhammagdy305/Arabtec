"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [candidate, setcandidate] = useState({
    Name:               '',
    Phone:              '',
    Email:              '',
    Country:            '',
    City:               '',
    Address:            '',
    Applying_for:       '',
    Experience:         '',
    Expected_Salary:    '',
    Available_to_start: '',
    More_info:          '',
    Why_Arabtec:        '',
    Comments:           '',
    CV:                 '',

  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    Object.entries(candidate).forEach(([key, value]) => {
      console.log(key,value);

        formData.append(key, value); // Append other candidate data
      
    });
    

    try {
      const res = await fetch('/api/uploadCareer', {
        method: "POST",
        body: formData,
      });

      if (res.status === 201) {
        router.refresh();
        router.push('/candidate');
      }
    } catch (error) {
      console.error('Error uploading candidate:', error);
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;

      // Handle other input change
      setcandidate(prevState => ({
        ...prevState,
        [name]: value
      }));
    }

  
  
  

  const handleChange_Date = (e, field) => {
    const { value } = e.target;
    setcandidate(prevState => ({
      ...prevState,
      [field]: value
    }));
  }
  

  return (
    <form onSubmit={handleSubmit} className="w-1/2" encType="multipart/form-data">
      {Object.keys(candidate).map(key => (
        <label key={key}>
          <span>{key}</span>
          {(
            <input
              required
              type="text"
              name={key}
              onChange={handleChange}
              value={candidate[key]}
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
