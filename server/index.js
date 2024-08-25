const express = require("express");
const app = express();
const cors = require("cors");
const todoRoute = require('./routes/todo');
const profileRoute = require('./routes/profile');
const main = require("./middlewares/main");
const errorHandle = require("./middlewares/errorHandle"); // Import directly

// Middlewares
app.use(cors());
app.use(express.json());
app.use(main);

// Routes
app.use('/api/todo', todoRoute);
app.use('/api/profile', profileRoute);

// Error handling middleware
console.log(typeof errorHandle);
app.use(errorHandle); // Ensure errorHandle is a function

// Server port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
