const io = require("socket.io")();

io.on("connection", function () {
    console.log("a user connected!");
    console.log("a user connected!");
    console.log("a user connected!");
});

io.listen(3001);
