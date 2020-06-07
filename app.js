var express = require("express");
var app = express();

var port = process.env.PORT || 5000;
app.use("/", require("./server/main"));
app.use("/user", require("./server/login"));
app.listen(port, console.log(`listning on port ${port}`));