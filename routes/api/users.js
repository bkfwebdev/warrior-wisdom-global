const express = require("express");
const usersRouter = express.Router();
const User = require("../../models/Users");
//@route    api/users/test
//@desc     test post route
//@access   public

usersRouter.get("/test", (req, res) => res.json({ msg: "users works son!" }));

//@route    GET api/users/registration
//@desc     register user
//@access   public

usersRouter.post("/register",(req,res) => { 
    User.findOne({email: req.body.email}).then (user => {
        if(user){
            return res.status(400).json({email:"email already exist"});
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password
            });
        }
    })
});

module.exports = usersRouter;
