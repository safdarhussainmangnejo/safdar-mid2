const multer = require('multer');
const facultyTable = require('../model/usersSchema');
const path = require('path');
const req = require('express/lib/request');
const { exec } = require('child_process');
const res = require('express/lib/response');
const { rmSync } = require('fs');

//uploading image
const storage = multer.diskStorage(
    {
        destination:function(req, file, callback){
            callback(null, "./public/img")
        },
        filename:function(req, file, callback){
            callback(null, Date.now()+"_"+file.originalname)
        }
    }
);

const upload = multer({
    storage:storage,
}).single("image");

const insertUser =async (req, res)=>{
   
    console.log(req.body)
    const {fullname,email,number,country,province,city,address,zipcode} = req.body
    const image = req.file.filename;
    console.log(req.file)

    const user = new facultyTable ({
        fullname:fullname,
        email:email,
        number:number,
        country:country,
        province:province,
        city:city,
        address:address,
        zipcode:zipcode,
        image:image
    })
    user.save((err)=>{
        if(err){
            res.send({message:err.message})
        }
        else{
            res.redirect('/showproducts')
        }
    })
}



const showUsers = async (req, res)=>{
    const data = await facultyTable .find().exec((error, items)=>{
        console.log(items)
        if(error){
            res.send({message:"Error"})
        }
        else{
            res.render('showproducts', {title:"Show Users",items:items})
        }
    })
    
}

const home_call = async(req,res)=>{
    res.render('index',{title:"Home"})
}

const adduser_call = async(req,res)=>{
    res.render('adduser',{title:"Add User"})
}

const viewUser_by_id = async (req, res)=>{

  
    const {id} = req.params;
    console.log(id)
    facultyTable.findById(id).exec((error, items)=>{
        if(error){
            res.send({message:error.message})
        }
        else{
            // res.send(items)
            res.render('viewproduct', {title:"View Product", items:items})
        }
    })
}

const deleteUser_by_id = async (req, res)=>{
    const {id} = req.params;
    console.log(id)
    facultyTable .find
    await facultyTable.findByIdAndRemove(id).exec((error, items)=>{
        if(error){
            res.send({message:error.message})
        }
        else{
            // res.send(items)
            res.redirect('/showproducts')
        }
    })
}

const updateUser = async(req, res)=>{

    const {id} = req.params;
    console.log(id)
    facultyTable.findById(id).exec((error, items)=>{
        if(error){
            res.send({message:error.message})
        }
        else{
            // res.send(items)
            console.log(req.body)
            res.render('updateuser', {data:items})
        }
    })
}

const updateUser_byID = async(req,res)=>{
    console.log(req.body)
    const {id}= req.params;
    
    const image = req.file.filename;
    console.log(req.file)

    await facultyTable.findByIdAndUpdate(id,{
        $set:{fullname:fullname,
            email:email,
            number:number,
            country:country,
            province:province,
            city:city,
            address:address,
            zipcode:zipcode,
            image:image
        }
    })
    res.redirect('/showusers')

}
module.exports = {home_call,
    adduser_call, 
    insertUser, 
    showUsers, 
    upload, 
    viewUser_by_id, 
    deleteUser_by_id, 
    updateUser,
    updateUser_byID,};
