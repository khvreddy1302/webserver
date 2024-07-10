"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// var app = (0, express_1.default)();
// app.com
// app/help
// app/about
app.get('', function (req, res) {
    res.send("<h1>hello express</h1>");
});
app.get('/help', function (req, res) {
    res.send('help page');
});
app.get('/about', function (req, res) {
    res.send('about the page');
});
app.get('/weather', function (req, res) {
    res.send('The weather is clear');
});
app.listen(3000, function () {
    console.log("Server is up on port 3000.");
});
