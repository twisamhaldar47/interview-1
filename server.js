const express = require('express');
const searchRoutes = require('./routes')
const app = express();



app.use('/', searchRoutes)

// app.get('/get/:id',(req,res)=>{
//     res.send(`GET hit ${req?.params}`)
// })
const port = 3000
app.listen(port,()=>{
    console.log('Server is running on port 3000');
})
