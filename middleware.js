const express = require("express");
const app = express();
const reqFilter = require("./module")
const route = express.Router();
//app.use(reqFilter);

route.use(reqFilter);
app.get("",(req,res) =>{
    res.send("how are you bro?");
});


route.get("/about", (req,res) =>{
    res.send("why are you running?");
});

route.get("/contact", (req,res) =>{
    res.send("you can contact me anytime you want to");
});

app.get("/shell", (req,res) =>{
    res.send("you can contact me anytime you want to");
});

app.use("/",route);


app.listen(8000,()=> {
    console.log("listening 8000");
});