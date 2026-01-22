import mongoose from "mongoose";

const contentTypes = ["image", "video", "music", "article", "others"];

const contentSchema = new mongoose.Schema({
    link : {
        type : String,
        required : true,
        maxlength : 500,
        trim : true
    },
    type : {
        type : String,
        enum : contentTypes,
        required : true,
        maxlength : 30,
        lowercase : true
    },
    title : {
        type : String,
        maxlength : 500,
        required : true
    },
    tags : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Tag"
        }
    ],
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
});

const Content = mongoose.model("Content", contentSchema);

export default Content;
