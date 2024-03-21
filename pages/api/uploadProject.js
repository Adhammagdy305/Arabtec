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
        console.log("Body: ", req.body, "Files: ",req.files);
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

        } = req.body;

        // Extract file paths from req.files
        //const { Coverimg: coverimgFiles, Thumbnail: thumbnailFiles, Gallery: galleryFiles } = req.files;
        var Coverimg;
        var Thumbnail;
        var Gallery;
        
        if(req.files.Coverimg!=undefined){
            console.log("coverimg found");
            const image1 = req.files.CIimageInput;
            const Path1 = Destination + Date.now() + '-coverimg.jpg';
            await uploadImage(image1[0].buffer,Path1);
            const file1 = bucket.file(Path1);
            const [url1] = await file1.getSignedUrl({ action: 'read', expires: '1-3-2025' });
            Coverimg=url1;
          }

          if(req.files.Thumbnail!=undefined){
            console.log("thumbnail found");
            const image2 = req.files.TNimageInput;
            console.log(image2[0].buffer);
            const Path2 = Destination + Date.now() + '-thumbnail.jpg';
            await uploadImage(image2[0].buffer,Path2);
            const file2 = bucket.file(Path2);
            const [url2] = await file2.getSignedUrl({ action: 'read', expires: '1-3-2025' });
            Thumbnail=url2;
          }

          if(req.files.Gallery){
            console.log(" Gallery found");
            const gal = req.files.Gallery;
            var gal_url = [];
            console.log(gal.length, req.files.Gallery.length);
            for(i=0;i<gal.length;i++){
              const Path = Destination + Date.now() + '-Gal_' +(i+1) +'.jpg';
              await uploadImage(gal[i].buffer,Path);
              const file = bucket.file(Path);
              const [url] = await file.getSignedUrl({ action: 'read', expires: '1-3-2025' });
              gal_url[i] = url;
              console.log("Image ",i+1," Done!");
            }
            
            Gallery=gal_url;
          }
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

        // Save the project to the database
        await project.save();

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
