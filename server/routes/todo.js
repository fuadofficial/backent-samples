const express = require('express')
const route = express.Router()
const { checkAuth } = require("../middlewares/auth");

route.get("/", (req, res) => {
    res.json({
        message: "hy",
    });
});

route.post("/", checkAuth, (req, res) => {
    return res.json({
        message: "success",
    });
});

module.exports = route