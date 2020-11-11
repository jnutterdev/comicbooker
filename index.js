let express = require('express');
let app = express();
const port = 3000;
let path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/css', express.static(__dirname + '/node_modules/bulma/css'));
app.use(express.static('static'));

app.get('/', function(req, resp) {
    resp.render('index')
})

app.listen(port, () => console.log(`App running on http://localhost:${port}`));