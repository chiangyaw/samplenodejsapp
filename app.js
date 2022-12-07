const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
    <body>
    <img src="https://media.giphy.com/media/l1J9B0F8OvQoyX9O4/giphy.gif" alt="Unicorn" />
    <p>Ben Chong is Here</p>
  </body>
    </html>
  `);
});

app.listen(8080, () => {
  console.log('Application listening on port 8080');
});
