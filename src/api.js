var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h2>Welcome to Web API</h2>");
});

app.get("/customers", (req, res) => {
  mongoClient.connect("mongodb://127.0.0.1:27017", (err, clientObject) => {
    if (!err) {
      var database = clientObject.db("reactdb");
      database
        .collection("customers")
        .find({})
        .toArray((err, documents) => {
          if (!err) {
            res.send(documents);
          }
        });
    } else {
      console.log(err);
    }
  });
});

app.put("/updateuser/:id", (req, res) => {
  var id = parseInt(req.params.id);

  mongoClient.connect("mongodb://127.0.0.1:27017", (err, clientObject) => {
    if (!err) {
      var database = clientObject.db("reactdb");
      database.collection("customers").updateOne(
        { $id: id },
        {
          $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            maidenName: req.body.maidenName,
            email: req.body.email,
            phone: req.body.phone,
          },
        },
        (err, res) => {
          if (!err) {
            console.log("Record updated");
          }
        }
      );
      if (!err) {
        console.log("Record updated");
      }
    } else {
      console.log(err);
    }
  });
});

app.delete("/customers/:id", (req, res) => {
  var id = parseInt(req.params.id);

  mongoClient.connect("mongodb://127.0.0.1:27017", (err, clientObject) => {
    if (!err) {
      var database = clientObject.db("reactdb");
      database.collection("customers").deleteOne({ $id: id }, (err, res) => {
        if (!err) {
          console.log("Record delete");
          res.redirect("/customers");
        }
      });
    } else {
      console.log(err);
    }
  });
});

app.get("/products", (req, res) => {
  mongoClient.connect("mongodb://127.0.0.1:27017", (err, clientObject) => {
    if (!err) {
      var database = clientObject.db("reactdb");
      database
        .collection("products")
        .find({})
        .toArray((err, documents) => {
          if (!err) {
            res.send(documents);
          }
        });
    } else {
      console.log(err);
    }
  });
});

app.get("/usersv1", (req, res) => {
  mongoClient.connect("mongodb://127.0.0.1:27017", (err, clientObject) => {
    if (!err) {
      var database = clientObject.db("reactdb");
      database
        .collection("usersv1")
        .find({})
        .toArray((err, documents) => {
          if (!err) {
            res.send(documents);
          }
        });
    } else {
      console.log(err);
    }
  });
});

app.post("/registeruserv1", (req, res) => {
  var userDetails = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    MaidenName: req.body.MaidenName,
    Age: req.body.Age,
    UserName: req.body.UserName,
    MobileNumber: req.body.Mobile,
  };

  mongoClient.connect("mongodb://127.0.0.1:27017", (err, clientObject) => {
    if (!err) {
      var database = clientObject.db("reactdb");
      database.collection("usersv1").insertOne(userDetails, (err, result) => {
        if (!err) {
          console.log("Record inserted!!");
          console.log(result);
          res.redirect("/usersv1");
        } else {
          console.log(err);
        }
      });
    } else {
      console.log(err);
    }
  });
});

app.listen(4000);
console.log(`Server Started : http://127.0.0.1:4000`);
