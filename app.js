var express = require("express");
var app = express();

var port = process.env.PORT || 5000;
app.listen(port, console.log(`listning on port ${port}`));

app.use("/user", require("./server/login"));
app.use("/", require("./server/main"));