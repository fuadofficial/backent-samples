const express = require('express')
const route = express.Router()

route.get("/", (req, res) => {
    res.json({
        message: "hy for profile",
    });
});

module.exports = route