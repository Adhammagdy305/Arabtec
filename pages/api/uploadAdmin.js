// /api/projects.js
import connectDB from '../../app/mdb/db';
import multer from 'multer'; // Import multer
import Admin from '../../Models/admin.js'; // Import your Mongoose model
import bcrypt from 'bcrypt';


// Initialize multer middleware
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for uploaded files

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, as Multer will handle it
  },
};


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
          Username,
          Password,
          Level
        } = req.body;
        const hash_pass= await bcrypt.hash(Password, 10);
        // Create a new Project instance with the extracted data
        const admin = new Admin({
          Username,
          Password: hash_pass,
          Level,
        });
        console.log("admin aho:",admin);
        // Save the project to the database
        await admin.save().then(()=>{console.log("Saved!");});

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