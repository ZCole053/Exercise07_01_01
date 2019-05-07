import config from './config';
const express = require('express');
const server = express();
// const fs = require('fs');
import apiRouter from './api';

server.set('view engine', 'ejs');

server.get('/', (req,res) => {
    res.render('index', {
        content: "Hello Express and <em>EJS!</em>"
    });
});

// server.get('/about.html', (req,res) => {
//     fs.readFile('./about.html', (err,data) =>{
//         res.send(data.toString());
//     });
// });

server.use('/api', apiRouter);


server.use(express.static('public'));


server.listen(config.port, () => {
    console.info("Server listening on port:%s", config.port)
});