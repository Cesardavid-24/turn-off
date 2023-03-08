//imports modules
const express = require('express')
const cors = require('cors')
const body_parser = require('body-parser') 
const router = express.Router()
const turnOff =  require('./app')
//const
const app = express()
const port = '3000'
const msg = {message : "POST OK"}
const message = { message : "Hello from node js"}
//use modules 
app.use(cors())
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())
app.use(router)

//route
router.post('/signal', (req,res) => {
     const data = req.body.signal.toLowerCase()
     if(data == 'off'){
        turnOff.turnOff()
     }
})

//app running
app.listen(port , () => {
    console.log(`server is running on port ${port}`)
})

