let express = require('express');
let app = express();
let port = 3000;
let path = require('path');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/node_modules/bulma/css'));
app.use(express.static('static'));

app.locals.comicbookdata = require('./models/comicsdb.json');

app.get('/', function(req, resp) {
    resp.render('layout')
})

app.listen(port, () => console.log(`App running on http://localhost:${port}`));