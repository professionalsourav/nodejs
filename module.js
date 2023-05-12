module.exports = reqFilter = (req,res,next) =>{
    //next();

    if(!req.query.age){
        res.send("not allowed");
    }
    else if(req.query.age<18){
        res.send("you do not have the age");
    }
    else{
        next();
    }
};
