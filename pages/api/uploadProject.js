// /api/projects.js
import connectDB from '../../app/mdb/db';
import multer from 'multer'; // Import multer
import Project from '../../Models/Project.js'; // Import your Mongoose model



// Initialize multer middleware
const upload = multer({ dest: 'uploads/' }); // Specify the destination folder for uploaded files

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, as Multer will handle it
  },
};
//firebase init
import admin from 'firebase-admin';

let firebaseInitialized = false;

if (!admin.apps.length) {
  const serviceAccount = require("../../app/mdb/adhamlix-firebase-adminsdk-87ihy-1dd939d531.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://adhamlix.appspot.com'
  });
  firebaseInitialized = true;
}

const bucket = admin.storage().bucket();
const Destination = "/uptest/";
//firebase init end

  async function uploadImage(fileBuffer, remoteFilePath) {
    const file = bucket.file(remoteFilePath);
    
    // Use the createWriteStream method to upload the buffer directly
    const stream = file.createWriteStream({
      metadata: {
        contentType: 'image/png/jpg/jpeg' // Adjust the content type based on your image type
      },
      resumable: false
    });
  
    stream.on('error', (error) => {
      console.error(`Error uploading image to ${remoteFilePath}:`, error);
    });
  
    stream.on('finish', () => {
      console.log(`Image uploaded to ${remoteFilePath}`);
    });
  
    // Write the buffer to the stream
    stream.end(fileBuffer);
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
        console.log("Body: ", req.body,"Files lengths: ", req.files.length, "Files: ", req.files);
        // Extract project data from req.body
        const {
          Day,
          Month,
          Year,
          Name_en,
          Service_en,
          Location_en,
          Prj_Description_en,
          Alt_Img_PP_en,
          Second_Description_en,
          Proj_Keywords_en,
          Name_ar,
          Service_ar,
          Location_ar,
          Prj_Description_ar,
          Alt_Img_PP_ar,
          Second_Description_ar,
          Proj_Keywords_ar,
          Coverimg,
          Thumbnail,
          Gallery

        } = req.body;

        // Create a new Project instance with the extracted data
        const project = new Project({
          St_Date: [Year,Month,Day],
          Name_en,
          Service_en,
          Location_en,
          Prj_Description_en,
          Alt_Img_PP_en,
          Second_Description_en,
          Proj_Keywords_en,
          Name_ar,
          Service_ar,
          Location_ar,
          Prj_Description_ar,
          Alt_Img_PP_ar,
          Second_Description_ar,
          Proj_Keywords_ar,
          Coverimg, // Save file paths to the project fields
          Thumbnail,
          Gallery
        });
        console.log("Project aho:",project);
        // Save the project to the database
        await project.save().then(()=>{console.log("Saved!");});

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
