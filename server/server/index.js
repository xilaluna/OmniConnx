const app = require('./www/bin/app.js');
const port = 5555;

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})