const express = require('express')
const route = express.Router()
const { checkAuth } = require("../middlewares/auth");

route.get("/", (req, res) => {
    res.json({
        message: "normal get method",
    });
});

route.post("/", checkAuth, (req, res) => {
    return res.json({
        message: "your post is successsully",
    });
});

module.exports = route