import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

import router from './routes/dalle.routes.js'

const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))  // max limit we can send

app.use('/api/v1/dalle',router)

app.get('/',(req,res)=>{
    res.json({message:"Hello!! Backend working"})
})

app.listen(8080,()=>{
    console.log("Server Connected")
})