import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
var bandMade = ''
const app = express();
const port = 3001;


app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  
  bandMade = req.body['street']+req.body['pet'];
  res.send(`<h1>Brand Name 🎶 is ${bandMade} </h1>`);
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
