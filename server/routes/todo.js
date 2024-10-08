const express = require('express');
const router = express.Router();
const { checkAuth } = require("../middlewares/auth");

router.get("/", (req, res) => {
    res.json({
        message: "normal get method",
    });
});

router.post("/", checkAuth, (req, res, next) => {
    const { todo } = req.body;

    if (!("todo" in req.body)) {
        const error = {
            status: 400,
            fields: {
                body: req.body,
                required: 'todo',
            }
        }
        return next(error)
    }

    res.json({
        message: "your post of todo is successsully",
    });
});

module.exports = router