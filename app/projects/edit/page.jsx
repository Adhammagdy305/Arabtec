"use client"
// "use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function EditForm() {
  const router = useRouter();

  const [project, setProject] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getOneProject');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProject(data.data[0]);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchData();
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/editProject', {
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
      console.error('Error updating project:', error);
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
        {isLoading ? <span>Updating...</span> : <span>Update Project</span>}
      </button>
    </form>
  )
}
