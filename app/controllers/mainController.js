const mainController = { 

    homePage: (_req, res) => {
        res.render("home");
    },
    addThingToDoAndRedirect: (req, res) => {
        const field = req.body.todofield;
        req.session.todolist.push(field);
        res.redirect("/");
    },
    removeThingToDoAndRedirect: (req, res) => {
        const id = req.params.id;
        if(id < req.session.todolist.length) {
            req.session.todolist.splice(id, 1);
        }
        res.redirect("/");
    }

}

module.exports = mainController;