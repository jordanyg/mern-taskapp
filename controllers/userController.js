import User from "../models/userModel.js"
import asyncHandler from 'express-async-handler'

const createUser = asyncHandler(async(req ,res)=>{
    const {name , email , password} = req.body
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
        res.status(201).json({
            id : user._id,
            name : user.name,
            email :user.email
        })
    }
    
})
const updateUser =asyncHandler( (req, res)=>{
    res.status(200).json({message : 'user updated'})
})
const deleteUser = asyncHandler((req, res)=>{
    res.status(200).json({message : 'user delete'})
})
const loginUser = asyncHandler((req, res)=>{
    res.status(200).json({message : 'user profile'})
})
export {createUser , updateUser , deleteUser , loginUser}