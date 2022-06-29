const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();
app.use(morgan("short"))

app.get("/",(req, res, next) => {
  try {
    res.status(200).sendFile(path.join(__dirname,"./index.html"));
  } catch (error) {
    next
  }
})

app.get("/about",(req, res, next) => {
  try {
    res.status(200).sendFile(path.join(__dirname,"./about.html"));
  } catch (error) {
    next
  }
})

app.get("/contact",(req, res, next) => {
  try {
    res.status(200).sendFile(path.join(__dirname,"./contact.html"));
  } catch (error) {
    next
  }
})

app.get(*,(req, res, next) => {
  try {
    res.status(404).sendFile(path.join(__dirname,"./notFound.html"));
  } catch (error) {
    
  }
})

app.use((err, req, res, next) =>{
  res.status(err.statusCode || 500).json({name: error.name, msg: err.message || "Server error."})
})

app.listen(8080, () => console.log("Server listening..."));