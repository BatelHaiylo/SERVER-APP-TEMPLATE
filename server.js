const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req,res)=>{
    res.send("server is working")
})

app.listen(port, ()=>{
    console.log(`server is listening in port ${port}`)
})