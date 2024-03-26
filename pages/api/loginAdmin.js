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
        } = req.body;
        //const hash_pass= await bcrypt.hash(Password, 10);

        const user = await Admin.findOne({ Username: Username });
        console.log('User Found:', user);
    if (user){
        console.log('Before Password Authentication', Password , user.Password);
        const passwordMatch = await bcrypt.compare(Password, user.Password);
        console.log('After Password Authentication');
        if (passwordMatch) {
            console.log("Password Match!!");
            res.status(201).json({ success: true, message: 'Logged in' });
        } else {
            res.status(401).json({ error: 'Invalid password' });
            console.log("Invalid Passowrd");
        }
    }




      });
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
