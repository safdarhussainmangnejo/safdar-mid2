//imports
const express = require('express');
const mongoose = require("mongoose");
const app = express();
const {addProduct} = require('./controller/productController');
const Product = require('./model/products')
const bodyParser = require('body-parser')
const port = 3000;

//connect to mongodb

 
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/products", {}, ()=>{
    console.log("Connection succesful to database");
})

//static
app.use(express.static('public'));
app.use('./css',express.static(__dirname + '/public/css'));
app.use('./img',express.static(__dirname + 'public/img'));

//set views, middlewares
// app.set('views','./views');
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
//routes
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

// app.get('/api', async (req,res)=>{
//    console.log(req.body)
//    res.json(req.body)
   
    
// })
// app.post('/adddata',(req, res)=>
// {console.log(Product)})
// //     Product.create({
// //         name:"iPhone",
// //         price:300000, 
// //         image:""
// //     },(req,res)=>{ console.log(Product)})
// //    });
//listen to port 3000
app.listen(port, ()=>{console.log(`listening port ${port}`)});