// Utilisation de ExpressJS
var express = require("express");

//Creation d'un objet Express
var app = express();

//Stockage des données statiques sur le dossier public
app.use(express.static("public"));

//Utilisation de la bibiotheque EJS
app.set("view engine", "ejs");

//Chemin vers le dossier views
app.set("views", "./views");

//Deploiement sur le port 3000
app.listen(3000);

app.get("/", function(request, response){

    response.render("homePage");
});

app.get("/test", function(request, response){

    response.render("testPage");
});