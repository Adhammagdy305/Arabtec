// /api/candidates.js
import connectDB from '../../app/mdb/db';
import multer from 'multer'; // Import multer
import Candidate from '../../Models/Candidate.js'; // Import your Mongoose model



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
        // Extract candidate data from req.body
        const {
          Name,
          Phone,
          Email,
          Country,
          City,
          Address,
          Applying_for,
          Experience,
          Expected_Salary,
          Available_to_start,
          More_info,
          Why_Arabtec,
          Comments,
          CV
          } = req.body;

        // Create a new candidate instance with the extracted data
        const candidate = new Candidate({
          Name,
          Phone,
          Email,
          Country,
          City,
          Address,
          Applying_for,
          Experience,
          Expected_Salary,
          Available_to_start,
          More_info,
          Why_Arabtec,
          Comments,
          CV
        });
        console.log("Candidate aho:",candidate);
        // Save the candidate to the database
        await candidate.save().then(()=>{console.log("Saved!");});

        res.status(201).json({ success: true });
      });
    } catch (error) {
      console.error('Error creating Candidate:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
