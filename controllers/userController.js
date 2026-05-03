import User from "../models/userModel"
import asyncHandler from 'express-async-handler'

const createUser = async(req ,res)=>{
    const [name , email , password] = req.body
    if(!name || !email || !password){
        res.status(400).json({message : 'all fields required'})
    }
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        console.log('user already exists')
    }
    const user = await User.create({name , email , password})

    if(user){
        res.status(201)
        res.status(201).json({
            id : user._id,
            name : user.name,
            email :user.email
        })
    }
    
}
const updateUser = (req, res)=>{
    res.status(200).json({message : 'user updated'})
}
const deleteUser = (req, res)=>{
    res.status(200).json({message : 'user delete'})
}
const loginUser = (req, res)=>{
    res.status(200).json({message : 'user profile'})
}
export {createUser , updateUser , deleteUser , loginUser}