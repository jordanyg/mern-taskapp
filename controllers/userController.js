import User from "../models/userModel.js"
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'

const createUser = asyncHandler(async(req ,res)=>{
    const {name , email , password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('All fields are required')
    }
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('user already exists')
    }
    const Salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)


    const user = await User.create({name , email , password : hashedPassword})

    if(user){
        res.status(201).json({
            id : user._id,
            name : user.name,
            email :user.email
        })
    }
    
})
const loginUser = asyncHandler(async(req, res)=>{
    const {email , password} = req.body
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            id : user._id,
            name : user.name,
            email :user.email
        })
    }else{
        res.status(401)
        throw new Error ('username or password incorrect')
    }
})
const updateUser =asyncHandler( (req, res)=>{
    const {name , email , password} = req.body
    const user = await User.findOne({email})

    if(!user){
        res.status(400)
        throw new Error('user does not exist')
    }

    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if(req.body.password){
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password , salt)
        user.password = hashedPassword || user.password
    }

    const updatedUser =  await user.save()

    if(updateUser){
        res.status(200).json({
            id : updateUser._id,
            name: updateUser.name , 
            email: updateUser.email
        })
    }

})
const deleteUser = asyncHandler((req, res)=>{
    res.status(200).json({message : 'user delete'})
})

export {createUser , updateUser , deleteUser , loginUser}