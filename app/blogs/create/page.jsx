"use client"
//
//import { useRouter } from "next/navigation";
//import { useState } from "react";
//
//export default function CreateForm() {
//  const router = useRouter();
//
//  const [blog, setblog] = useState({
//    Title_en: '',
//    Category_en: '',
//    Blog_Keywords_en: '',
//    Para_en: '',
//    Title_ar: '',
//    Category_ar: '',
//    Blog_Keywords_ar: '',
//    Para_ar: '',
//    slug: '',
//    Cover_img_alt: '',
//    coverimg: '',
//    thumbnail: ''
//  });
//
//  const [isLoading, setIsLoading] = useState(false);
//
//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    setIsLoading(true);
//
//    const formData = new FormData();
//    Object.entries(blog).forEach(([key, value]) => {
//      console.log(key,value);
//
//        formData.append(key, value); // Append other blog data
//      
//    });
//    
//
//    try {
//      const res = await fetch('/api/uploadBlog', {
//        method: "POST",
//        body: formData,
//      });
//
//      if (res.status === 201) {
//        router.refresh();
//        router.push('/blogs');
//      }
//    } catch (error) {
//      console.error('Error uploading blog:', error);
//      setIsLoading(false);
//    }
//  }
//
//  const handleChange = (e) => {
//    const { name, value, files } = e.target;
//    if (name === 'Year' || name === 'Month' || name === 'Day') {
//      // Handle date input change
//      setblog(prevState => ({
//        ...prevState,
//        [name]: value
//      }));
//    } /*else if (files) {
//      // Handle file input change
//      setblog(prevState => ({
//        ...prevState,
//        [name]: files[0] // Assuming single file input
//      }));
//    } */else {
//      // Handle other input change
//      setblog(prevState => ({
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
//    setblog(prevState => ({
//      ...prevState,
//      [field]: value
//    }));
//  }
//  
//
//  return (
//    <form onSubmit={handleSubmit} className="w-1/2" encType="multipart/form-data">
//      {Object.keys(blog).map(key => (
//        <label key={key}>
//          <span>{key}</span>
//          {(
//            <input
//              required
//              type="text"
//              name={key}
//              onChange={handleChange}
//              value={blog[key]}
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

  const [blog, setBlog] = useState({
    Title_en: '',
    Category_en: '',
    Blog_Keywords_en: '',
    Para_en: '',
    Title_ar: '',
    Category_ar: '',
    Blog_Keywords_ar: '',
    Para_ar: '',
    slug: '',
    Cover_img_alt: '',
    coverimg: '',
    thumbnail: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/uploadBlog', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog),
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

    setBlog(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
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
        {isLoading ? <span>Adding...</span> : <span>Add Blog</span>}
      </button>
    </form>
  )
}
