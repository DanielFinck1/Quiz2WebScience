const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const https = require('https');

/* This is where the Angular files live after they are built.  */
app.use(express.static(path.join(__dirname, './ajax/dist/ajax')));

app.get('*', function(req, res) {
  res.sendfile(path.join(__dirname + '/ajax/dist/ajax/index.html'));
});

app.get('/comic', (req,res) => {
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb+srv://dan:comic@cluster0.jkw9q.mongodb.net/comics";
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("comics");
    var query = { };
    dbo.collection("list").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
      res.json(result);
    });
  });  
});

app.listen(port, () => {
  console.log('Listening on *:3000');
});
