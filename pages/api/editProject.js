import connectDB from '../../app/mdb/db';
import Project from '../../Models/Project.js'; // Import your Mongoose model

export const config = {
  api: {
    bodyParser: true, // Enable body parsing
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
  console.log(req.body);
  if (req.method === 'POST') {
    try {
      const {
        _id,
        St_Date,
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

      const Date = formatDateToArray(St_Date);

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
        Coverimg,
        Thumbnail,
        Gallery
      };

      await Project.findByIdAndUpdate(_id, editedProject);
      console.log("Project updated:", editedProject);

      res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error updating project:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
