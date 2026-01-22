import mongoose from "mongoose";

export interface ILink {
    hash: string;
    userId: mongoose.Types.ObjectId;
}

const linkSchema = new mongoose.Schema(
    {
        hash: {
            type: String,
            required: true,
            trim: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

const Link = mongoose.model<ILink>("Link", linkSchema);

export default Link;
