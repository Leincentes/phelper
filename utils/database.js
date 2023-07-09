import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log("Already Connected"); 
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'phelper',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })    
        isConnected = true;
        console.log('Connected')
    } catch (error) {
        console.log(error);
    }
    
}