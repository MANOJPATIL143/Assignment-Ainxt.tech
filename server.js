// server.js

const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to get the list of videos
app.get('/videos', (req, res) => {
  fs.readFile('videos.json', (err, data) => {
    if (err) {
      console.error('Error reading videos.json:', err);
      return res.status(500).send('Error reading video list.');
    }
    const videos = JSON.parse(data);
    res.json(videos);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
