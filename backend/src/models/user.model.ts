import mongoose from "mongoose";

export interface IUser {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            maxlength: 50,
        },
        first_name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
        last_name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            select: false, // prevents accidental exposure
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
