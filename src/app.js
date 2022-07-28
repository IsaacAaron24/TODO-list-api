const express = require('express')
const listRouter = require('./todo_list/list.router').router

const app = express()


app.use(express.json())
app.use('/api/v1', listRouter) 

app.listen(3000, ()=>{
    console.log(`Servert started at port 3000`)
})