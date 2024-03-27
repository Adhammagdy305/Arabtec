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

      const editedBlog = {
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

      await Blog.findByIdAndUpdate(_id, editedBlog);
      console.log("Blog updated:", editedBlog);

      res.status(201).json({ success: true });
    } catch (error) {
      console.error('Error updating blog:', error);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
