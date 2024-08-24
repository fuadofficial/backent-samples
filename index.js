const express = require("express");
const cors = require("cors");
const { checkAuth } = require("./middlewares/auth");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "hy",
    });
});

app.post("/", checkAuth, (req, res) => {
    return res.json({
        message: "success",
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
