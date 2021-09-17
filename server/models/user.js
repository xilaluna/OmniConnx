const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema

const db = {};
db.mongoose = mongoose
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

const UserSchema = new Schema(
  {

    password: { type: String, select: false },
    username: { type: String, required: true },
    cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
  },
  { timestamps: { createdAt: "created_at" } }
)

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

module.exports = mongoose.model("User", UserSchema)
