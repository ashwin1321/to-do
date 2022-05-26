const router = require('express').Router()
const Todo = require('../models/todo-model')



// routes
router.post('/add/todo',(req,res)=>{
    const todo = req.body
    const newTodo = new Todo(todo)
    // console.log(todo);

    //save
    newTodo.save()
        .then(()=>{
            console.log(`Successfully added todo...`);
            res.redirect('/')
        })
        .catch(err => console.log(err))
})

.get('/delete/todo/:_id',(req,res)=>{
    const {_id} = req.params;
   console.log(_id);
   const abc = Todo.findById(_id)
    Todo.deleteOne({abc})
        .then(()=>{
            console.log('Deleted successfully');
            res.redirect('/')
        })
        .catch((err)=> console.log(err))
    
})


module.exports = router