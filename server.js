import express from 'express'
import userRoutes from './routes/userRoutes.js'


const app = express()
const port = 8000

app.use(express.json())
app.use('/users' , userRoutes)

app.get('/' , (req,res)=>{
    res.json({message : 'server is working'})
})
app.listen(port , ()=>{
    console.log(`server is ready at port ${port}`)
})

