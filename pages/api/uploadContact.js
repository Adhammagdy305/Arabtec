import connectDB from '../../app/mdb/db';
import Contact from '../../Models/Contactus.js'; // Import your Mongoose model

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
      console.log(req.body);
      // Extract project data from req.body
      const {
        Name,
        Email,
        Comments
      } = req.body;

      const contact = new Contact({
        Name,
        Email,
        Comments
      });
      console.log("Comment aho:" , contact);
      // Save the contact to the database
      await contact.save().then(()=>{console.log('Saved!');});
      res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error creating contact:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
