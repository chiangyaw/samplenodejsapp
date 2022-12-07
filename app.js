const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="background-color: #ffc0cb">
        <h1 style="color: #ffa500">Ben Chong is here!</h1>
      </body>
    </html>
  `);
});

app.listen(8080, () => {
  console.log('Application listening on port 8080');
});
