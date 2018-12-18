const express = require("express");
const profilesRouter = express.Router();

//@route    api/profiles/test
//@desc     test post route
//@access   public

profilesRouter.get("/test", (req, res) =>
  res.json({ msg: "profiles works son!" })
);

module.exports = profilesRouter;
