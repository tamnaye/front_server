// const express = require("express");

// const app = express();

// const port = 3001;

// app.set("port", port);

// app.get("/", (req, res) => {
//   res.send("../frontend/public/index.html");
// });

// app.listen(port, () => console.log("Listening on", port));

// module.exports = app;
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
// app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use(express.static('build'));
app.get('/', function (req, res) {
  res.send('This is CORS-enabled for all origins!')
})

app.listen(81, function () {
  console.log('CORS-enabled web server listening on port 80')
})