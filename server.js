import express from 'express'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import { notFound ,errorHandler } from './middleware/errorMiddleware.js'



dotenv.config()
connectDB()

const app = express()
const port = 8000

app.use(express.json()) //1 body parser first
app.use(express.urlencoded({extended : false}))
app.use('/users' , userRoutes) //2 routes second
app.use(notFound) //3 not gound error handler third
app.use(errorHandler) // 4 error handler fourth



app.get('/' , (req,res)=>{
    res.json({message : 'server is working'})
})
app.listen(port , ()=>{
    console.log(`server is ready at port ${port}`)
})

