
import connectDB from '../../app/mdb/db';
import Project from '../../Models/Project.js'; // Import your Mongoose model

export const config = {
  api: {
    bodyParser: true, // Enable body parsing
  },
};

export default async function handler(req, res) {
  // Connect to MongoDB
  await connectDB();

  if (req.method === 'POST') {
    try {
      // Extract project data from req.body
      const {
        Day,
        Month,
        Year,
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

      // Create a new Project instance with the extracted data
      const project = new Project({
        St_Date: [Year, Month, Day],
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
      });

      // Save the project to the database
      await project.save().then(()=>{console.log('Saved!\n',project)});
      res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
