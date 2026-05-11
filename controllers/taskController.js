import asyncHandler from "express-async-handler"
import Task from "../models/taskModel.js"

const createTasks =asyncHandler( async(req,res)=>{
    if(!req.body){
        res.status(200)
        throw new Error('please enter a task')
    }

    const tasks = await Task.create({
        text : req.body.text,
        user : req.user.id
    })
    res.status(200).json(tasks)
})

const getTasks = asyncHandler( async(req,res)=>{
    const tasks = await Task.find()
})

const updateTask = (req,res)=>{
    res.status(200).json({message: 'update task route working'})
}

const deleteTask = (req,res)=>{
    res.status(200).json({message: 'delete task route working'})
}

export {createTasks , getTasks , updateTask , deleteTask}