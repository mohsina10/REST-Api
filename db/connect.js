
require("dotenv").config();
const mongoose=require("mongoose"); 
//const dbUrl="mongodb+srv://user2001:test123@cluster0.yrjxwok.mongodb.net/?retryWrites=true&w=majority"; 
const connectDB =()=> {
    return mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true, 
        useUnifiedTopology:true, 
});
}; 
module.exports=connectDB; 
