import mongoose from 'mongoose';

let isConneted = false; //variable to chck if mongoose is connected


export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if(isConneted) return console.log('Already connected to MongoDB')

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
    }

}