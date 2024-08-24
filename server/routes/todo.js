const express = require('express')
const route = express.Router()
const { checkAuth } = require("../middlewares/auth");

route.get("/", (req, res) => {
    res.json({
        message: "normal get method",
    });
});

route.post("/", checkAuth, (req, res) => {
    const { todo } = req.body;

    if (!("todo" in req.body)) {
        return res.status(400).json({
            message: "undifined todo",
        });
    }
    res.json({
        message: "your post of todo is successsully",
    });
});

module.exports = route