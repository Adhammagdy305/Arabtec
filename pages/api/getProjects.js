// /api/projects.js
import connectDB from '../../app/mdb/db';
import Project from '../../Models/Project.js'; // Import your Mongoose model


// Connect to MongoDB


export default async function handler(req, res) {
    await connectDB();
    if (req.method === 'GET') {
        try {
            console.log("Ana hena habda2 adawar");
            const projects = await Project.find(); // Fetch all items from the database
            console.log("La2eet aho", projects);
            res.status(200).json({ success: true, data: projects });
        } catch (error) {
            console.error('Error fetching items:', error);
            res.status(500).json({ success: false, error: 'Server Error' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
    }
}
