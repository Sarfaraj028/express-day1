// const express = require('express');

// const port = 3000;
// const app = express();

// app.get('/', (req, res) =>{
//     res.send("Home Page");
// })

// app.get('/about', (req, res) =>{
//     res.send("Sarfaraj Alam"+req.query)
// })

// app.listen(port, () =>{
//     console.log("Listening on port");
// })

const express = require('express');

const port = 3000;
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send("Home Page");
});

// About route with optional query parameter
app.get('/about', (req, res) => {
    const name = req.query.name || '';  // Default to an empty string if no query param is provided
    res.send("Sarfaraj Alam " + name);
});

// Start the server
app.listen(port, () => {
    console.log("Listening on port " + port);  // Fixed the missing space
});
