import asyncHandler from "express-async-handler"
import Task from "../models/taskModel.js"

const createTasks =asyncHandler( async(req,res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('please enter a task')
    }

    const tasks = await Task.create({
        text : req.body.text,
        user : req.user.id
    })
    res.status(200).json(tasks)
})

const getTasks = asyncHandler( async(req,res)=>{
    const tasks = await Task.find({user : req.user.id })
    res.status(200).json(tasks)
})

const updateTask = asyncHandler(async(req,res)=>{
    const task = await Task.findById(req.params.id)
    if(!task){
        res.status(400)
        throw new Error('no task found')
    }
    if(task.user.toString() !== req.user.id){
        res.status(400)
        throw new Error('not authorized')
    }
    task.text = req.body.text || task.text
    const updatedTask = await task.save()

    res.status(200).json(updatedTask)


})

const deleteTask =asyncHandler( async(req,res)=>{
    const task = await Task.findById(req.params.id)
        if(!task){
            res.status(400)
            throw new Error('no task found')
        }
        if(task.user.toString() !== req.user.id){
            res.status(400)
            throw new Error('not authorized')
        }

        await task.deleteOne()
        res.status(200).json({id: req.params.id})
})

export {createTasks , getTasks , updateTask , deleteTask}