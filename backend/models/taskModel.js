import mongoose from "mongoose";
import User from "./userModel.js";

const taskSchema = await mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId, //So every task stores the ID of the user who created it.
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