

const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = 8000;

const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname,"../templates");
const partialpath = path.join(__dirname,"../templates/partials");

//to set view ingine 
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials("partialpath")

//app.use(express.static(staticpath));

//template engine route
app.get("", (req,res) => { 
res.render("index");
});

app.get("/about", (req,res)=> {
    res.render("about");
});

app.get("/", (req,res)=>{
res.send("welcome to my home page");
});

app.get("*",(req,res)=>{
    res.render("404");
});

app.listen(port, () =>{
    console.log(`listening port number ${port}`);
});


















// const path = require("path");
// const express = require("express");
// //const { dirname } = require("path");
// const app = express();

// //absolute path
// //console.log(__dirname);
// //const staticpath = path.join(_dirname, "../public");
// const staticpath= path.join(__dirname, "../public");


// //builtin middle wire
// app.use(express.static(staticpath));

// app.get("/", (req,res) =>{
//     res.send("hellon from the express");
// });


// app.listen(3000, ()=> {
// console.log("listening the port 3000");
// });

// app.get("/about", (req,res) =>{
//     res.send("hello about from the express");
// });













// const express = require("express");

// const app = express();

// app.get("/", (req,res) =>{
  
//     res.send("hello form the my side");
// });

// app.get("/about", (req,res) => {
 
//     res. end("i have a good knowledge about everything");
// });

// app.listen(8000, () => {

//     console.log("listening to the port 8000");
// });