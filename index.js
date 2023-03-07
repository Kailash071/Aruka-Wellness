const express = require('express')
const http = require('http')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')
  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))
app.set('view engine','html')
nunjucks.configure('app/views', {
    autoescape: true,
    express: app
});
app.use(express.static(path.join(__dirname,'/public')))

app.get('/',(req,res)=>{
    res.render('index',{
        alias:'index'
    })
})
app.get('/schedule',(req,res)=>{
    res.render('schedule',{
        alias:'schedule'
    })
})
app.get('/trainer',(req,res)=>{
    res.render('trainer',{
        alias:'trainer'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        alias:'about'
    })
})
app.get('/contact',(req,res)=>{
    res.render('contact',{
        alias:'contact'
    })
})
app.get('/blog',(req,res)=>{
    res.render('blog',{
        alias:'blog'
    })
})
app.get('/classes',(req,res)=>{
    res.render('classes',{
        alias:'classes'
    })
})




const server = http.createServer(app)
server.listen(port,()=>{
    console.log(`Running on http://localhost:${port}`)
})