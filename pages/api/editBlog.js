
/********************************************************************************************************************************** */
// /api/blogs.js
import connectDB from '../../app/mdb/db';
import multer from 'multer'; // Import multer
import Blog from '../../Models/blog.js'; // Import your Mongoose model



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
        // Extract blog data from req.body
        const {
          _id,
          Title_en,
          Category_en,
          Blog_Keywords_en,
          Para_en,
          Title_ar,
          Category_ar,
          Blog_Keywords_ar,
          Para_ar,
          slug,
          Cover_img_alt,
          coverimg,
          thumbnail,

        } = req.body;

        // Create a new blog instance with the extracted data
        const editedblog = {
          Title_en,
          Category_en,
          Blog_Keywords_en,
          Para_en,
          Title_ar,
          Category_ar,
          Blog_Keywords_ar,
          Para_ar,
          slug,
          Cover_img_alt,
          coverimg,
          thumbnail,
        };
        console.log("blog aho:",editedblog);
        // Save the blog to the database
        await Blog.findByIdAndUpdate(_id, editedblog).then(()=>{console.log("Updated!");});

        res.status(201).json({ success: true });
      });
    } catch (error) {
      console.error('Error creating blog:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
