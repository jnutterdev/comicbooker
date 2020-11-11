let express = require('express');
let app = express();
let path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/node_modules/bulma/css'));

app.get('/', function(req, resp) {
    resp.render('index')
})

app.listen(3000, () => console.log(`App running on http://localhost:3000`));