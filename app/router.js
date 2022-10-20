const express = require("express"); // Import express 

const router = express.Router(); // Mise en place routeur

// Import du/des controller(s)
const displayController = require("./controllers/displayController");
const updateController = require("./controllers/updateController");

//Page d'accueil
router.get("/", displayController.homePage);

//Ajout d'un élément à la todo
router.post("/add",updateController.addThingToDoAndRedirect);

// Suppression d'un élément de la todo
router.get("/remove/:id", updateController.removeThingToDoAndRedirect);

// On coche ou non les tâches
router.get("/do/:id", updateController.thingDone);
router.get("/undo/:id", updateController.thingUndone);

// On trie 
router.get("/:isCompleted", displayController.filteredPage);

// On modifie
router.get("/modify/:id", updateController.modifyThingAndRedirect);

// On gère l'ensemble
// router.get("/deleteEverything", updateController.removeEverything);
// router.get("/completeEverything", updateController.completeEverything);


//404
router.use((_req, res) => { // Gestion de tous les cas d'url incorrect via un middleware 404
    res.status(404).render("404");
});

module.exports = router; // Export routeur