const mainController = { 

    homePage: (req, res) => {
        res.render("home");
    },
    addThingToDoAndRedirect: (req, res) => {
        const field = req.body.todofield;
        const infos = {
            name: field,
            status: false,
            id: req.session.todolist.length + 1
        }
        req.session.todolist.push(infos);
        res.redirect("/");
    },
    removeThingToDoAndRedirect: (req, res) => {
        const id = parseInt(req.params.id);
        const index = req.session.todolist.findIndex(chore => chore.id === id);
        if(index !== -1) {
            req.session.todolist.splice(index, 1);
        }
        res.redirect("/");
    }, 
    thingDone: (req, res) => {
        const id = parseInt(req.params.id);
        const index = req.session.todolist.findIndex(chore => chore.id === id);
        if(index !== -1) {
            req.session.todolist[index].status = true;
        }
        res.redirect("/");
    },
    thingUndone: (req, res) => {
        const id = parseInt(req.params.id);
        const index = req.session.todolist.findIndex(chore => chore.id === id);
        if(index !== -1) {
            req.session.todolist[index].status = false;
        }
        res.redirect("/");
    },
    filteredPage: (req, res, next) => {
        const status = req.params.status;
        let filteredThings;
        if(status === "active") {
            filteredThings = req.session.todolist.filter(chore => chore.status === false);
        } else if (status === "completed") {
            filteredThings = req.session.todolist.filter(chore => chore.status === true);
        } else {
            next(); return;
        }
        res.render("filtered", {
            filteredThings
        })
    }, 
    modifyThingAndRedirect: (req, res) => {
        const id = parseInt(req.params.id);
        const value = req.query.chore;
        const index = req.session.todolist.findIndex(chore => chore.id === id);
        if(index !== -1) {
            req.session.todolist[index].name = value;
        }
        res.redirect("/");
    }

}

module.exports = mainController;