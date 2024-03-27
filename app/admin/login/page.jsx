"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();

  const [admin, setAdmin] = useState({
    Username: '',
    Password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/loginAdmin', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(admin), // Convert data to JSON format
      });

      if (res.status === 201) {
        router.refresh();
        router.push('/admin');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setIsLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle other input change
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
        {isLoading ? <span>Logging in...</span> : <span>Login</span>}
      </button>
    </form>
  )
}
