import express from "express";
import athleteRouter from "./routes/athlete_routes.js";
import authRouter from "./routes/auth_routes.js";
import cors from "cors";

var app = express();

const whitelist = ["http://localhost:3004"];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));

app.use("/athlete", athleteRouter);
app.use("/auth", authRouter);

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
