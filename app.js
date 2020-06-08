var express = require("express");
var app = express();
app.use(express.static('source'));

var port = process.env.PORT || 5000;
app.use("/", require("./server/main"));
app.use("/user", require("./server/login"));
app.listen(port, console.log(`listning on port ${port}`));