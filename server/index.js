const express = require("express");
const cors = require("cors");
const app = express();
const todoRoute = require('./routes/todo')
const profileRoute = require('./routes/profile');
const { main } = require("./middlewares/main");

app.use(cors());
app.use(express.json());
app.use(main)

app.use('/api/todo', todoRoute)
app.use('/api/profile', profileRoute)

const PORT = 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
