const express = require('express')
// const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')
const app  = express()


// connecting to mongodb
mongoose.connect('mongodb://localhost/todo',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// / middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))                // static file server garna
app.set("view engine","ejs")
app.use(require('./routes/index'))
app.use(require('./routes/todo-route'))

app.listen(5000,()=>{
    console.log(`Server listening at port 5000....`);
})

