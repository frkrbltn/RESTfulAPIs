const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: "it works! status 200"
    });
});


module.exports = app;