
const {connectDB}=require('./dbConfig/db.js');
const filterMoviesRoute = require('./Routes/filterMoviesRoute.js');

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

// const { default: fetchTransactions } = require('../client/src/components/Functions/Fetchtransactions.js');
const app = express();
const port = 3001;

connectDB();


app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON bodies


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//Routes
app.use('/searchMovies',filterMoviesRoute);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
