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
      const { Username, Password } = req.body;

      // Find the admin user
      const user = await Admin.findOne({ Username: Username });

      if (user) {
        // Compare passwords
        const passwordMatch = await bcrypt.compare(Password, user.Password);

        if (passwordMatch) {
          // Passwords match, user authenticated
          console.log("Password Match!");
          res.status(201).json({ success: true, message: 'Logged in' });
        } else {
          // Invalid password
          res.status(401).json({ error: 'Invalid password' });
        }
      } else {
        // User not found
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
