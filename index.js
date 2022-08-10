const express= require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authorRouter = require('./routes/author');
const bookRouter = require('./routes/book');

dotenv.config();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//Routes
app.use("/authors", authorRouter);
app.use("/books", bookRouter);

//Connect database
mongoose.connect((process.env.MONGODB_URL), ()=> {
    console.log("Connected to MongoDB");
});

app.listen(8000, () => {
    console.log("Server is running. ..");
});