const express = require("express"); // Import express 

const router = express.Router(); // Mise en place routeur

// Import du/des controller(s)
const mainController = require("./controllers/mainController");

//Page d'accueil
router.get("/", mainController.homePage);

//Ajout d'un élément à la todo
router.post("/add",mainController.addThingToDoAndRedirect);

// Suppression d'un élément de la todo
router.get("/remove/:id", mainController.removeThingToDoAndRedirect);

// On coche ou non les tâches
router.get("/do/:id", mainController.thingDone);
router.get("/undo/:id", mainController.thingUndone);

// On trie 
router.get("/:status", mainController.filteredPage);

// On modifie
router.get("/modify/:id", mainController.modifyThingAndRedirect);


//404
router.use((_req, res) => { // Gestion de tous les cas d'url incorrect via un middleware 404
    res.status(404).render("404");
});

module.exports = router; // Export routeur