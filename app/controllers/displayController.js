const displayController = { 

    homePage: (req, res) => {
        res.render("home");
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
    }

}

module.exports = displayController;