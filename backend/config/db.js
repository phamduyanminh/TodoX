import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log('Connected to MongoDB');
    }catch (err) {
        console.log(err);
        process.exit(1);
    }

};
