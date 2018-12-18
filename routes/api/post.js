const express = require("express");
const postRouter = express.Router();

//@route    api/post/test
//@desc     test post route
//@access   public

postRouter.get("/test", (req, res) => res.json({ msg: "post works son!" }));

module.exports = postRouter;
