"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [admin, setAdmin] = useState({
    Username: '',
    Password: '',
    Level: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/uploadAdmin', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(admin),
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

    setAdmin(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      {Object.keys(admin).map(key => (
        <label key={key}>
          <span>{key}</span>
          <input
            required
            type="text"
            name={key}
            onChange={handleChange}
            value={admin[key]}
          />
        </label>
      ))}
      <button className="btn-primary">
        {isLoading ? <span>Adding...</span> : <span>Add Admin</span>}
      </button>
    </form>
  )
}
