let bodyParser = require('body-parser');
let express = require('express');
let app = express();
var router = require('./routes/routes');



app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('teste');
// })


app.use('/',router);

app.listen(3535, () =>{
    console.log("Aplicação em execução");
});