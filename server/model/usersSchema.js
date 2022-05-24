const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    fullname: 
    {
        type:String,
        required:true
    }, 
    email: 
    {
        type:String,
        required:true
    },
    number: 
    {
        type:String,
        required:true
    }, 
    country: 
    {
        type:String,
        required:true
    },
    province: 
    {
        type:String,
        required:true
    }, 
    city: 
    {
        type:String,
        required:true
    },
    address: 
    {
        type:String,
        required:true
    }, 
    zipcode: 
    {
        type:Number,
        required:true
    },
    image: 
    {
        type:String,
        required:true
    }

});
const facultyTable = mongoose.model("faculty", userSchema);
// const insertData = async ()=>{
//     const data = await StudentTable.create({
//         email:"safdar@gmail.com", 
//         password:"123"
//     });
// }
module.exports=facultyTable;