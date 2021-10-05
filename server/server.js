const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = __dirname + '/views/';


//const app = require('/index.js');
const port = 8080;
//"start": "concurrently \"react-scripts start\" \"cd backend && nodemon server\"",

dotenv.config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
})
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path));


//database
const db = require("./models/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


// app.post("/user", (req, res) => {
//   try{
//       const { first_name } = req.body;
//   } catch (err) {
//       console.log(err);
//   }
// });
require("./routes/postRoutes")(app);
require("./routes/userRoutes")(app);
//require('./src/http-common')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
