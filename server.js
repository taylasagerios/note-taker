const express = require('express');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
const path = require('path');
const app = express();
const PORT = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clog);
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🏎️`)
);