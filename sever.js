const express = require("express");
const path = require("path");
const serv = express();
const { connectToDb, getDb } = require("./db");
const { log } = require("console");

serv.use(express.static(path.join(__dirname, "public")));
serv.use(express.json());
serv.use("/scripts", express.static(path.join(__dirname, "scripts")));

serv.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

serv.listen(8080,(req,res)=>{
  console.log("Server started");
})