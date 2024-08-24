const express = require("express");
const cors = require("cors");
const app = express();
const todoRoute = require('./routes/todo')
const { main } = require("./middlewares/main");

app.use(cors());
app.use(express.json());
app.use(main)

//normal method call route
app.use('/api/todo', todoRoute)

//anoter method call route
app.use('/api/profile', require('./routes/profile'))

const PORT = 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
