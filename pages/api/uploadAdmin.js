import connectDB from '../../app/mdb/db';
import Admin from '../../Models/admin.js'; // Import your Mongoose model
import bcrypt from 'bcrypt';

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
      // Extract admin data from req.body
      const { Username, Password, Level } = req.body;
      
      // Hash the password
      const hash_pass = await bcrypt.hash(Password, 10);

      // Create a new Admin instance with the extracted data
      const admin = new Admin({
        Username,
        Password: hash_pass,
        Level,
      });

      // Save the admin to the database
      await admin.save().then(()=>{console.log("Saved!\n",admin)});
      res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error creating admin:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
