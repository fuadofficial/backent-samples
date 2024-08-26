const express = require("express");
const cors = require("cors");
const todoRoute = require('./routes/todo');
const profileRoute = require('./routes/profile');
const { main } = require("./middlewares/main");
const { errorHandle } = require("./middlewares/errorHandle");

const app = express();

// Middleware usage
app.use(cors());
app.use(express.json());
app.use(main); // Ensure `main` is a function

// Routes
app.use('/api/todo', todoRoute);
app.use('/api/profile', profileRoute);

// Error handling middleware
app.use(errorHandle);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
