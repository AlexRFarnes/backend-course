const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, '/views')); // set views path

app.set('view engine', 'ejs');

// To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the static directory: ie. /assets
app.use(
  '/assets',
  express.static(path.join(__dirname, '/public'), {
    // etag: false,
    // maxAge: '20s',
  })
); // express.static(root, [options]) Serve static files such as images, CSS files, and JavaScript files. The root argument specifies the root directory from which to serve static assets.

app.get('/', (req, resp) => {
  resp.render('index'); // render a view
  // send a file
  // resp.sendFile('index.html', {
  //   root: __dirname,
  // });
  // resp.send(__dirname);
});

app.listen(3000);
