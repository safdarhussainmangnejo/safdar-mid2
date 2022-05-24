const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;
const path = require('path')
const routepath  = require('./server/router/routes')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs')

mongoose.connect("mongodb://localhost:27017/products", {}, ()=>{
    console.log("Connection succesful to database");
})

app.use("/",express.static(path.resolve('public/css')))
app.use("/",express.static(path.resolve('public/img')))

app.use('/',routepath)

// app.get('',(req, res)=>{
//     res.render('index', {text: "Safdar Hussain", dept:"CS"});
// })

// app.get('/about',(req, res)=>{
//     res.render('about', {text: "Madan", dept:"CS"});
// })

// app.get('/addproduct',(req, res)=>{
//     res.render('addproduct');
// })

// app.get('/showproducts',(req, res)=>{
//     res.render('showproducts');
// })

// app.post('/additems', async (req,res)=>{
//    console.log(req.body)
//    res.json(req.body)  
// })

// app.get("/showproducts", ShowProducts);
// app.get('/showitems', async (req,res)=>{
//     console.log("Data Displayed")
 
//  })





app.listen(port, ()=>{console.log(`listening port ${port}`)});