import express from 'express'
import { createTasks ,getTasks ,updateTask, deleteTask } from '../controllers/taskController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/add' , protect,createTasks)
router.get('/get',protect, getTasks)
router.put('/update/:id' ,protect,updateTask)
router.delete('/delete/:id' ,protect, deleteTask)


export default router