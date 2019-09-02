const express = require("express")
const app = express()
const fs = require('fs')

const vue_template = fs.readFileSync("assets/vue_template.txt", {encoding: "utf-8"})

const server = app.listen(80, function(){
  console.log("Node.js is listening to PORT:" + server.address().port)
})

app.get("/vue", function(req, res, next){
  res.send(vue_template)
})