let express = require('express');
const PORT = 80;
let app = express();
app.listen(PORT, function() {
    console.log("Mi servidor Http esta abierto en el puerto " + PORT + "...");
});
app.get('/yooo', function(req, res) {
    console.log('Hola, soy yo.');
});

//problemas con certificado