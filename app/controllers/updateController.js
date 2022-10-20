const updateController = { 

    addThingToDoAndRedirect: (req, res) => {
        const field = req.body.todofield;
        const infos = {
            name: field,
            isCompleted: false,
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
            req.session.todolist[index].isCompleted = true;
        }
        res.redirect("/");
    },

    thingUndone: (req, res) => {
        const id = parseInt(req.params.id);
        const index = req.session.todolist.findIndex(chore => chore.id === id);
        if(index !== -1) {
            req.session.todolist[index].isCompleted = false;
        }
        res.redirect("/");
    },

    modifyThingAndRedirect: (req, res) => {
        const id = parseInt(req.params.id);
        const value = req.query.chore;
        const index = req.session.todolist.findIndex(chore => chore.id === id);
        if(index !== -1) {
            req.session.todolist[index].name = value;
        }
        res.redirect("/");
    }, 



}

module.exports = updateController;