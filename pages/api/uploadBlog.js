// /api/projects.js
//import connectDB from '../../app/mdb/db';
//import multer from 'multer'; // Import multer
//import Blog from '../../Models/blog.js'; // Import your Mongoose model
//
//
//
//// Initialize multer middleware
//const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for uploaded files
//
//export const config = {
//  api: {
//    bodyParser: false, // Disable body parsing, as Multer will handle it
//  },
//};
//
//
//export default async function handler(req, res) {
//  // Connect to MongoDB
//    await connectDB();
//    if (req.method === 'POST') {
//    try {
//      // Use Multer middleware to handle file uploads
//      upload.any()(req, res, async function (err) {
//        if (err) {
//          console.error('Error uploading files:', err);
//          res.status(500).json({ success: false, error: 'Server Error' });
//          return;
//        }
//        console.log("Body: ", req.body);
//        // Extract project data from req.body
//        const {
//          Title_en,
//          Category_en,
//          Blog_Keywords_en,
//          Para_en,
//          Title_ar,
//          Category_ar,
//          Blog_Keywords_ar,
//          Para_ar,
//          slug,
//          Cover_img_alt,
//          coverimg,
//          thumbnail,
//          
//        } = req.body;
//
//        // Create a new Project instance with the extracted data
//        const blog = new Blog({
//          Title_en,
//          Category_en,
//          Blog_Keywords_en,
//          Para_en,
//          Title_ar,
//          Category_ar,
//          Blog_Keywords_ar,
//          Para_ar,
//          slug,
//          Cover_img_alt,
//          coverimg,
//          thumbnail
//        });
//        console.log("Blog aho:",blog);
//        // Save the project to the database
//        await blog.save().then(()=>{console.log("Saved!");});
//
//        res.status(201).json({ success: true });
//      });
//    } catch (error) {
//      console.error('Error creating project:', error);
//      res.status(500).json({ success: false, error: 'Server Error' });
//    }
//  } else {
//    res.status(405).json({ success: false, error: 'Method Not Allowed' });
//  }
//}
//

import connectDB from '../../app/mdb/db';
import Blog from '../../Models/blog.js'; // Import your Mongoose model

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
        thumbnail
      } = req.body;

      // Create a new Blog instance with the extracted data
      const blog = new Blog({
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
        thumbnail
      });

      // Save the blog to the database
      await blog.save().then(()=>{console.log('Saved!\n',blog);});
      res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error creating blog:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
