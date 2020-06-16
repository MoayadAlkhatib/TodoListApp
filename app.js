import express from 'express'
import mainroute from './source/server/main.js'
import userroute from './source/server/login.js'

var app = express();
app.use(express.static('source'));

var port = process.env.PORT || 5000;
app.use("/", mainroute);
app.use("/user", userroute);
app.listen(port, console.log(`listning on port ${port}`));