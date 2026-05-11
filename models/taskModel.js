import mongoose from "mongoose";
import User from "./userModel.js";

const taskSchema = await mongoose.Schema({
    name:{
        type : mongoose.Schema.Types.ObjectId,
        required : true , 
        ref : User
    },
    
    text : {
        type: String,
        required: true ,

    }
},
   {
     timestamps : true
    }

)

export const Task = mongoose.model('Task' , taskSchema)

export default Task