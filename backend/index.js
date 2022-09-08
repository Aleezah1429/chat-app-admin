const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");
const{loadMongoDb,getChatData, sendMsg} = require("./functions.js")

loadMongoDb()

// For AllUsers
app.get("/AllChats", (req, res) => {
  var resp = getChatData();
  resp.then((e) => {
    res.send(e);
  });
});

// For send message
app.post("/sendMsg", (req, res) => {
  console.log("sendMsg", req.body);
  sendMsg(req, res);
});


const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});