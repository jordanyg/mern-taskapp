import express from 'express'
import { createTasks ,getTasks ,updateTask, deleteTask } from '../controllers/taskController.js'

const router = express.Router()

router.post('/add' , createTasks)
router.get('/tasks', getTasks)
router.put('/update' ,updateTask)
router.delete('/delete' , deleteTask)


export default router