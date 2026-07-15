import dotenv from 'dotenv';

dotenv.config();

export const dbUrl = process.env.MONGO_DB_URL;