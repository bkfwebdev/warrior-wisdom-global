const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const post = require("./routes/api/post");
const bodyParser = require("body-parser");


//body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// db config

const db = require("./config/keys").mongoURI;

// connect to mongo db
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("!!! MongoDB Connected !!!"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("wassup son!");
});

// use routes
app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/post", post);

app.listen(port, () => console.log(`listening on port ${port}`));
