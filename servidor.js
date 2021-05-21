const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var encodedBodyParser = bodyParser.urlencoded({extended: true});

var db = "";
const uri = "mongodb+srv://colmena:Almi123@cluster0.lh31a.mongodb.net/login?retryWrites=true&w=majority";

app.use(express.static(path.join(__dirname, "public")))



app.listen(5000, '192.168.4.89',() => {
    console.log("servidor en :3000")
})

connect();
app.post('/insertUsu', encodedBodyParser, function(req, res)
{
    var log = insertUsu(req.body.usuario, req.body.password);
    res.redirect('/');
});

function insertUsu(username, password)
{
    var newUserSchema = new mongoose.Schema({
        username: String,
        password: String
    });
    var newUserModel = mongoose.model('usuarios', newUserSchema);
    var newUser = new newUserModel({username: username, password:password});
    newUser.save();
} 

function connect()
{
    mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true} )
        .then(
            function ()
            { 
                db = mongoose.connection; 
                console.log('Conexion Creada' + db);
            })
            .catch(err => console.log('Error de Conexion: ' + err));

}