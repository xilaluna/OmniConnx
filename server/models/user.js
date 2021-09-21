const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const dbConfig = require("../data/omniconnx-db.js");

//const Schema = mongoose.Schema

const db = {};
db.mongoose = mongoose
db.url = dbConfig.url;
//db.tutorials = require("./tutorial.model.js")(mongoose);
module.exports = mongoose => {

  const UserSchema = mongoose.Schema(
    {
      password: { type: String, select: false },
      username: { type: String, required: true },
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      phone: { type: String, required: true },
      location_value: { type: String, required: true },
      account_type: { type: String, required: true },
      company_id: { type: Number, required: true },
      calendar_id: { type: String, required: true },
      CV_ID: { type: Number, required: true },
      users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
    { timestamps: { createdAt: "created_at" } }
    
  );

  /*
  //If you use this app with a front-end that needs id field instead of _id, you have to override toJSON 
  //method that map default object to a custom object. So the Mongoose model could be modified as following code:
  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });


  //authentication
  // Must use function here! ES6 => functions do not bind this!
  UserSchema.pre("save", function (next) {
    // ENCRYPT PASSWORD
    const user = this
    if (!user.isModified("password")) {
      return next()
    }
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash
        next()
      })
    })
  })

  // Need to use function to enable this.password to work.
  UserSchema.methods.comparePassword = function (password, done) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      done(err, isMatch)
    })
  }
  */

  //module.exports = mongoose.model("User", UserSchema)
  const UserClass = mongoose.model("User", UserSchema);
  return UserClass
};
//module.exports = db;