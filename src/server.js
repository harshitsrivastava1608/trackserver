require('dotenv').config()
const express= require('express')
const cors = require('cors')
const router = require('./routes/milksession.route')

const PORT=process.env.PORT||7000

const app=express()
app.use(cors())
app.use(express.json())
app.use(router)
app.get('/',(req,res)=>{
    res.send({'msg':"Data Fetched"})
})
app.listen(PORT,()=>{
    console.log('server up @',PORT)
})