const express = require('express');
const users = require('./MOCK_DATA.json');

const port = 3000;
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send("Home Page");
});

// About route with optional query parameter
//1
app.get('/api/users', (req, res) => { 
    res.send(users);
});


//2 Rest APIs 
// const html = `
//     <ol>
//     ${users.map(user => `<li> ${user.first_name} </li>`)}
//     </ol>
// `
// app.get('/users', (req, res) => {
//     res.send(html);
// })

//3. get specific users by id
// app.get('/users/:id', (req, res) =>{ // :id=> means varible
//     const id = Number(req.params.id);
//     const user = users.find(user => user.id === id) // passed here
//     res.send(user)
// })

// 4. grouping or merging different methods using route method
app.route('user/:id')
.get('/users/:id', (req, res) =>{ // :id=> means varible
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id) // passed here
    res.send(user)
})
.post('user/:id', (req, res) =>{
    res.json({status: "pendng"})
})
.patch('user/:id', (req, res) =>{
    res.json({status: "pendng"})
})
.delete('user/:id', (req, res) =>{
    res.json({status: "pendng"})
})

// Start the server
app.listen(port, () => {
    console.log("Listening on port " + port);  // Fixed the missing space
});
