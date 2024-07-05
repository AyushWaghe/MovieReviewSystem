const { connectDB } = require('./dbConfig/db.js');
const filterMoviesRoute = require('./Routes/filterMoviesRoute.js');
const reviewChangesRoute = require('./Routes/reviewChangesRoute.js');
const reviewRoutes = require('./Routes/reviews');

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = 3001;

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.use('/searchMovies', filterMoviesRoute);
app.use('/reviewChanges', reviewChangesRoute);
app.use('/reviews',reviewRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});