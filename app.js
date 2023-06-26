
require("dotenv").config();
const express=require("express"); 
const app=express();  
const port =process.env.PORT || 3000;  
const connectDB=require("./db/connect");
const products_routes=require("./routes/products");
app.get("/",(req,res)=> {
    res.send("HIIIIII");
});   

app.use("/api/products",products_routes);
const start=async()=>{
    try{  
        console.log("db connected");
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`${port} Yes Connected`);
        });
    } 
    catch(error) 
    {
        console.log(error);
    }
}; 
start();