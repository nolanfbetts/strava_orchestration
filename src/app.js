import express from "express";
import athleteRouter from "./routes/athlete_routes.js";
var app = express();

app.use("/athlete", athleteRouter);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
