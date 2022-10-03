const express = require('express');
// const path = require('path');

const app = express();

app.set('views', __dirname + '/views'); // set views path
// app.set('views', path.join(__dirname, '../html/views')); // alternative way to set the views path
app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, resp) => {
  resp.render('index');
  //   resp.sendFile('index.html', {
  //     root: __dirname,
  //   });
  //   resp.send(__dirname);
});

app.listen(3000);
