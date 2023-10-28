const express = require('express');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');
const path = require('path');
<<<<<<< HEAD
const notes = require('./routes/notes');
const app = express();
const PORT = 5001;
=======
const app = express();
const PORT = 3001;
>>>>>>> refs/remotes/origin/main


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
<<<<<<< HEAD
notes.delete('/notes', (req,res) => {
   const found = notes.findIndex( i => parseInt(req.params.id) === i.id ? i :'') 
   console.log(found)
   if (found >= 0){
    notes.splice( found,1)
    res.json({
      success:false,
      error: "We cant delete this post"
    })
   }
})
//  const deleteNote = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
=======
>>>>>>> refs/remotes/origin/main

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🏎️`)
);