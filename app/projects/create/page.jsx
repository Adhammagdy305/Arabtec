"use client"

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
