import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true, 
        unique : true, 
        trim : true,
        lowercase : true,
        maxlength : 30
    }
});

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;