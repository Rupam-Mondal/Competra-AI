import mongoose from 'mongoose';
import { dbUrl } from './serverConfig.js';


export  default async function ConnectDb(){
    try {
        const response = await mongoose.connect(dbUrl);
        console.log("Database is connected");
        return response;
    } catch (error) {
        console.log(`Issue in database connection :- ${error.message}`);
        return error.message
    }
}