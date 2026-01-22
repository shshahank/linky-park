import mongoose from "mongoose";
import { DATABASE_URL } from "./config";

async function connectDB() {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Database connected to the backend");
    } catch(err) {
        console.log("Error connecting to Database");
        console.error(err);
    }
}

export default connectDB;
