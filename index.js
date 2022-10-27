require("dotenv").config(); // Variables d'environnement (port)

const express = require("express"); // Import express

const session = require("express-session"); // Import express-session gestion session

const router = require("./app/router"); // Import routeur

const app = express(); // Config express 

app.use(session({ // Configuratiion des sessions
    secret: "todo",
    resave: false, // Ne force save pas si pas de modification
    saveUninitialized: true, // Sauve la session même s'il n'y a rien dedans (init)
    cookie: {
      secure: false, // Non sécurisé
    }
}));

app.use(express.urlencoded({ extended: true })); // Gestion du body en cas de méthode post (connexion etc.)

app.set("view engine", "ejs"); // Choix du view engine : EJS
app.set("views","./app/views"); // Sélection du dossier pour l'utiliser

app.use(express.static("public")); // Sers les fichiers du dossier 'public' statiquement (images ...)

// Gestion dispo de la session
app.use((req, _res, next) => {
  if(!req.session.todolist) {
    req.session.todolist = [];
  }
  req.session.nbOfTrue = req.session.todolist.filter(chore => chore.isCompleted === true).length
  req.session.nbOfFalse = req.session.todolist.filter(chore => chore.isCompleted === false).length
  app.locals.session = req.session;

  next();
});

app.use(router); // Mise en route du routeur

const PORT = process.env.PORT || 3000; // Sélection du port via la variable d'environnement, ou 3000 par défaut

app.listen(PORT, () => { // Ecoute du routeur sur le port défini ci-dessus
    console.log(`Listening on ${PORT}`);
});  
