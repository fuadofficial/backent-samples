const express = require("express");
const cors = require("cors");
const todoRoute = require('./routes/todo');
const profileRoute = require('./routes/profile');
const { errorHandle } = require("./middlewares/errorHandle");

const app = express();

// Middleware usage
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use('/api/todo', todoRoute);
app.use('/api/profile', profileRoute);

app.use('*', (req, res) => {
    res.status(404).json({
        message: "This Route doesn't exist...!"
    })
});

// Error handling middleware
app.use(errorHandle);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
