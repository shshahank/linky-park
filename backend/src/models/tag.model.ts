import mongoose from "mongoose";

export interface ITag {
    title: string;
}

const tagSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            maxlength: 30,
        },
    },
    {
        timestamps: true,
    }
);

const Tag = mongoose.model<ITag>("Tag", tagSchema);

export default Tag;