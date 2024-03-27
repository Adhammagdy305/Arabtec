"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [contact, setcontact] = useState({
    Name:       '',
    Email:      '',
    Comments:   ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    Object.entries(contact).forEach(([key, value]) => {
      console.log(key,value);

      formData.append(key, value); // Append other contact data     
    });
    

    try {
      const res = await fetch('/api/uploadContact', {
        method: "POST",
        body: formData,
      });

      if (res.status === 201) {
        router.refresh();
        router.push('/blogs');
      }
    } catch (error) {
      console.error('Error uploading comment:', error);
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;

      // Handle other input change
      setcontact(prevState => ({
        ...prevState,
        [name]: value
      }));
    }

  return (
    <form onSubmit={handleSubmit} className="w-1/2" encType="multipart/form-data">
      {Object.keys(contact).map(key => (
        <label key={key}>
          <span>{key}</span>
          {(
            <input
              required
              type="text"
              name={key}
              onChange={handleChange}
              value={contact[key]}
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
