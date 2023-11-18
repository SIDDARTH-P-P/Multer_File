import express from "express";
import router from "./router.js";


const app = express();

app.use(express.urlencoded({extended:true}))
app.use("/",router)
app.use(express.static("./template"))

app.listen(3000,(error)=>{
    if(error){
        console.log(error);
    }
    console.log("server start");
})