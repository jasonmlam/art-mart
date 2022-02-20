require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/contact", function (req, res){
    res.sendFile(__dirname + "/html/contact.html");
})

app.get("/products", function (req, res){
  res.sendFile(__dirname + "/html/products.html");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})