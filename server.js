'use strict';
//require port from .env
require.'dotenv'.config(.env)

//init express and assign to var - does  heavy lifting
const express = require('express');
const app = express();


//constier const USE THIS PORT
const PORT = process.env.PORT || 3000;


//use this folder for info tell express whre to load html files from 
app.use(express.static('./public'));


//listen for user to go to path  - create routes for serber to access .../path/path in URL
app.get('/hello', (request, response) => {
	response.static(200).send('Hello')
})


//

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  }

  response.status(200).json(airplanes);
});

app.get('/data', (request, response) => {
  response.status(200).redirect('index.html');
});

app.use('*', (request, response) => response.send(`Sorry, that route does not exist`));

//listen to server - turn it on
app.listen(PORT, () => console.log(`listening on ${PORT}`)
);