import { createUser  ,updateUser ,loginUser , deleteUser} from "../controllers/userController.js";
import express from 'express'

const router = express.Router()

router.post('/register' ,createUser)
router.put('/profile', updateUser )
router.delete('/profile' , deleteUser)
router.post('/profile' , loginUser)


export default router