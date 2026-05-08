import { createUser  ,updateUser ,loginUser , deleteUser} from "../controllers/userController.js";
import express from 'express'
import protect from "../middleware/authMiddleware.js";

const router = express.Router()

router.post('/register' ,createUser)
router.put('/updateUser',protect, updateUser )
router.delete('/profile' ,protect, deleteUser)
router.post('/login' , loginUser)


export default router