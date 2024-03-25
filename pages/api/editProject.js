
/********************************************************************************************************************************** */
// /api/projects.js
import connectDB from '../../app/mdb/db';
import multer from 'multer'; // Import multer
import Project from '../../Models/Project.js'; // Import your Mongoose model



// Initialize multer middleware
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for uploaded files

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, as Multer will handle it
  },
};

function formatDateToArray(dateString) {
  const parts = dateString.split('-').map(Number);
  // Ensure that parts array has three elements
  while (parts.length < 3) {
    parts.unshift(0);
  }
  // Ensure that parts array has three elements in the correct order [yyyy, mm, dd]
  return [
    parts[2], // Year
    parts[1], // Month
    parts[0]  // Day
  ];
}

export default async function handler(req, res) {
  // Connect to MongoDB
    await connectDB();
    if (req.method === 'POST') {
    try {
      // Use Multer middleware to handle file uploads
      upload.any()(req, res, async function (err) {
        if (err) {
          console.error('Error uploading files:', err);
          res.status(500).json({ success: false, error: 'Server Error' });
          return;
        }
        console.log("Body: ", req.body);
        // Extract project data from req.body
        const {
          _id,
          Name_en,
          Service_en,
          Location_en,
          Prj_Description_en,
          Alt_Img_PP_en,
          Second_Description_en,
          Proj_Keywords_en,
          Name_ar,
          Service_ar,
          Location_ar,
          Prj_Description_ar,
          Alt_Img_PP_ar,
          Second_Description_ar,
          Proj_Keywords_ar,
          Coverimg,
          Thumbnail,
          Gallery

        } = req.body;
        console.log(req.body.St_Date);
        const Date= formatDateToArray(req.body.St_Date);
        console.log(Date);
        // Create a new Project instance with the extracted data
        const editedProject = {
          St_Date: Date,
          Name_en,
          Service_en,
          Location_en,
          Prj_Description_en,
          Alt_Img_PP_en,
          Second_Description_en,
          Proj_Keywords_en,
          Name_ar,
          Service_ar,
          Location_ar,
          Prj_Description_ar,
          Alt_Img_PP_ar,
          Second_Description_ar,
          Proj_Keywords_ar,
          Coverimg, // Save file paths to the project fields
          Thumbnail,
          Gallery
        };
        console.log("Project aho:",editedProject);
        // Save the project to the database
        await Project.findByIdAndUpdate(_id, editedProject).then(()=>{console.log("Updated!");});

        res.status(201).json({ success: true });
      });
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
