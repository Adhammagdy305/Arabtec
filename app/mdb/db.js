// db.js
import mongoose from 'mongoose';

const dbURI = 'mongodb+srv://Dodo:586200@cluster0.x8wkalj.mongodb.net/Arabtec_dummy?retryWrites=true&w=majority'; // Update with your MongoDB connection string

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            socketTimeoutMS: 30000, // Example: Increase socket timeout to 30 seconds
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
