const express = require("express");
const usersRouter = express.Router();

//@route    api/users/test
//@desc     test post route
//@access   public

usersRouter.get("/test", (req, res) => res.json({ msg: "users works son!" }));

module.exports = usersRouter;
