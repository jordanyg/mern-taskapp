import { createUser  ,updateUser ,loginUser , deleteUser} from "../controllers/userController.js";
import express from 'express'

const router = express.Router()

router.post('/register' ,createUser)
router.put('/updateUser', updateUser )
router.delete('/profile' , deleteUser)
router.post('/login' , loginUser)


export default router