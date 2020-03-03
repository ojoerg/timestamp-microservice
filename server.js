// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// For README.md Expectations

/*const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

app.get("/api/timestamp/:date_string?", (req, res) => {
   console.log("tests started")
  if (req.params.date_string === undefined) {
    var date = new Date()
  } else {
    var dateString = req.params.date_string;
    
    if (/-/g.test(dateString)) {
      var date = new Date(dateString)
    } else if (/\d/g.test(dateString)){
      var date = new Date(parseInt(dateString))
    } else {
      var date = "Invalid Date"
    }
    
  }
  
  if (date.toString() === "Invalid Date") {
    res.json({"unix": null, "utc" : "Invalid Date" })
  } else {
    res.json({ "unix": date.getTime()/1000, "natural": monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()})
  }

})*/

// For actual Tests

app.get("/api/timestamp/:date_string?", (req, res) => {
   console.log("tests started")
  if (req.params.date_string === undefined) {
    var date = new Date()
  } else {
    var dateString = req.params.date_string;
    
    if (/-/g.test(dateString)) {
      var date = new Date(dateString)
    } else if (/\d/g.test(dateString)){
      var date = new Date(parseInt(dateString))
    } else {
      var date = "Invalid Date"
    }
    
  }
  
  if (date.toString() === "Invalid Date") {
    res.json({"error" : "Invalid Date" })
  } else {
    res.json({ "unix": date.valueOf(), "utc": date.toUTCString()})
  }

})