const bcrypt = require("bcrypt");
const dbService = require("../services/database");

exports.login = async (req, res) => {
  const client = dbService.getClient();
  client.connect((err) => {
    var query = { UserEmail: req.body.UserEmail };
    const collection = client.db("MievidaUsersDB").collection("Users");

    collection.findOne(query, function (err, result) {
      if (err) throw err;
      if (result) {
        bcrypt.compare(req.body.UserPassword, result.UserPassword, function (bcrypterr, bcryptresult) {
          if (bcryptresult == true) {
            if (result.UserActivated === true) {
              var userdata = {
                UserID: result.UserID,
                UserEmail: result.UserEmail,
                UserType: result.UserType,
                Status: "login successful",
              };
              res.send(userdata);
            } else if (result.UserActivated === false) {
              var userdata = {
                UserID: result.UserID,
                UserEmail: result.UserEmail,
                UserType: result.UserType,
                Status: "activate account",
              };
              res.send(userdata);
            }
          } else {
            var userdata = {
              Status: "wrong password",
            };
            res.send(userdata);
            // redirect to login page
          }
        });
      } else {
        var userdata = {
          Status: "user not found",
        };
        res.send(userdata);
      }
      client.close();
    });
    // perform actions on the collection object
  });
};

exports.register = async (req, res) => {
  const client = dbService.getClient();
  bcrypt.hash(req.body.UserPassword, salt, (bcrypterr, encrypted) => {
    req.body.UserPassword = encrypted;
    client.connect((err) => {
      const collection = client.db("MievidaUsersDB").collection("Users");
      var registerUser = {
        UserID: req.body.UserID,
        UserEmail: req.body.UserEmail,
        UserPassword: req.body.UserPassword,
        UserFirstName: req.body.UserFirstName,
        UserLastName: req.body.UserLastName,
        UserType: req.body.UserType,
        UserPremium: req.body.UserPremium,
        UserActivated: req.body.UserActivated,
      };
      var query = { UserEmail: req.body.UserEmail };
      collection.findOne(query, function (err, result) {
        if (err) throw err;
        if (result) {
          res.send("User already exists");
        } else {
          collection.insertOne(registerUser, function (err, result) {
            if (err) res.send(err);
            if (result) {
              res.send("registered");
            }
            client.close();
            // perform actions on the collection object
          });
        }
      });
    });
  });
};
