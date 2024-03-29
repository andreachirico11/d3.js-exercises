const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + '/javascripts'));

app.get('/ball',(req, res, next) => {
  res.status(200);
  res.sendFile(path.join(__dirname , "views", "ball.html"));
});
app.get('/',(req, res, next) => {
  res.status(200);
  res.sendFile(path.join(__dirname , "views", "sandbox.html"));
});
app.get('/draw', (req, res, next) => {
  res.status(200);
  res.sendFile(path.join(__dirname , "views", "draw.html"));
})
app.get('/drawRect', (req, res, next) => {
  res.status(200);
  res.sendFile(path.join(__dirname , "views", "drawRect.html"));
})
app.get('/curve', (req, res, next) => {
  res.status(200);
  res.sendFile(path.join(__dirname , "views", "drawCurve.html"));
})



// app.use((req,res, next) => {
//   res.status(500).send('<p>NOT founddddddddddddddddddddddddddddddddddddddd</p>');
// })


app.listen(3001);
