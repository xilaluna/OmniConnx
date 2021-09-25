module.exports = app => {
    const posts = require("../controllers/postController.js");
  
    var router = require("express").Router();
  
  // Create a new user
  router.post("/create", posts.create);

  // Retrieve all users
  router.get("/", posts.findAll);

  // Retrieve a single user with id
  router.get("/:id", posts.findOne);

  // Update a user with id
  router.put("/update/:id", posts.update);

  // Delete a user with id
  router.delete("/delete/:id", posts.delete);

  // delete all users
  router.delete("/delete_all", posts.deleteAll);

  app.use('/post', router);
};
    