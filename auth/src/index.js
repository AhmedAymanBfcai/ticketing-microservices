"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.get('/api/users/currentuser', function (req, res) {
    res.send("Hi There!");
});
app.get('/', function (req, res) {
    console.log(req.url);
    res.send("Hi");
});
app.listen(3000, function () {
    console.log("Server is up on port 3000!!");
});
