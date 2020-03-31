const express = require('express') ;
const mongoose = require('mongoose');
const pollController = require('./pollController')

const app = express()
app.set('view engine','ejs')

app.get('/create',pollController.createPollGetController)
app.post('/create',pollController.createPollPostController)

app.get('/',(req,res)=>{
    res.render("home")
})

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true})
.then(
    app.listen(3000,()=>{
      console.log("your server is ready on port 3000")  
    })
)
.catch(err =>{
    console.log(err)
})