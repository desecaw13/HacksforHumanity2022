const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const JobData = require('./models/jobs.model')
const Rentals = require('./models/rentals.model')

const jwt = require('jsonwebtoken')


app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://Yash:JqCfWNpiH7KRR2fB@cluster0.0efrj.mongodb.net/hacksforhumanity')

// app.get('/hello', (req,resp) =>{
//     resp.send("Hello World")
// })

app.post('/api/register', async (req,resp) =>{
    console.log(req.body.form)
   
    try{
        
        await User.create({
            name: req.body.form.name,
            email:req.body.form.email,
            password:req.body.form.password,
            address: req.body.form.address,
            points: 0,
            
            
        })
        resp.json({status:'ok'})

    }catch(err){
        console.log(err)
        resp.json(err)

    }

})

app.get('/api/fetchjobs', async (req,resp) =>{
        
        const job =  await JobData.find()
        
        if(job){
            return resp.json({status:'ok', job:job})
        }
        else{
            return resp.json({status:'nok', job:false})
        }
})

app.get('/api/fetchrentals', async (req,resp) =>{
        
    const rent =  await Rentals.find()
    
    if(rent){
        return resp.json({status:'ok', rent:rent})
    }
    else{
        return resp.json({status:'nok', rent:false})
    }
})

app.post('/api/login', async (req,resp) =>{
    console.log(req.body)
   
        const user =  await User.findOne({
            email:req.body.form.email,
            password:req.body.form.password
            
        })
        
        if(user){

            const token = jwt.sign({
                name: user.name,
                email: user.email,

            }, 'secret123')
            return resp.json({status:'ok', jwt:token, user:user})
        }
        else{
            return resp.json({status:'nok', jwt:false, user:user})
            
        }
})


app.listen(1337, ()=>{
    console.log("Server Started on 1337")
})