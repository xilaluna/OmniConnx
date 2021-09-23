module.exports = app => {
    const users = require("../controllers/userController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", users.create);

  };

    