const { connectDB } = require('./dbConfig/db.js');
const filterMoviesRoute = require('./Routes/filterMoviesRoute.js');
const reviewChangesRoute = require('./Routes/reviewChangesRoute.js');
const fetchDataRoute = require('./Routes/fetchDataRoute.js');
const authenticationRoute=require('./Routes/authenticationRoute.js');

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = 3001;

connectDB();

app.use(cors({
    origin : [  "*", 
                "https://moviemania-server-rho.vercel.app/",
                "https://moviemania-client.vercel.app/"
    ],
    credentials : true
}));
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON bodies

app.get("/", async (req, res) => {
    return res.status(200).json({ message: "MovieReviewSystem server is up & running!"})
})


app.use('/searchMovies', filterMoviesRoute);
app.use('/reviewChanges', reviewChangesRoute);
app.use('/fetchData', fetchDataRoute);
app.use('/authenticate',authenticationRoute);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;