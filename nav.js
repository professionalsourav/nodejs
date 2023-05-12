const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req,res)=> {
 res.write("<h1>welcome to my home page</h1>");
 res.write("<h1>welcome to my home page and congratulation</h1>");
 res.send();
});


app.get("/about", (req,res)=> {
    res.send([{
        id: 1,
        name: "sourav"
     },{id : 2,
   name: "jitender" }]);
   });
   
   
app.get("/contact", (req,res)=> {
    res.json({id : 2,
        name: "jitender" });
   });

   
app.get("/temp", (req,res)=> {
    res.status(200).send("welcome to my temp page");
   });
   

app.listen(port, ()=> {
    console.log(`listening to the ${port}`);
});










// const express = require("express");

// const app = express();

// const port = 3000;

// app.get("/", (req,res)=> {

//      res.send("welcome to my page");
// });

// app.get("/about", (req,res)=> {

//     res.send("welcome to my about page");
// });

// app.listen(port, () => {
//     console.log("listening to the port 8000");
// });