import mongoose from "mongoose";

export interface IContent {
    link: string;
    type: "image" | "video" | "music" | "article" | "others";
    title: string;
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
}

const contentTypes = ["image", "video", "music", "article", "others"];

const contentSchema = new mongoose.Schema(
    {
        link: {
            type: String,
            required: true,
            maxlength: 500,
            trim: true,
        },
        type: {
            type: String,
            enum: contentTypes,
            required: true,
            lowercase: true,
        },
        title: {
            type: String,
            required: true,
            maxlength: 500,
        },
        tags: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Tag",
            },
        ],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Content = mongoose.model<IContent>("Content", contentSchema);

export default Content;
