const displayController = { 

    homePage: (req, res) => {
        res.render("home");
    },

    filteredPage: (req, res, next) => {
        const isCompleted = req.params.isCompleted;
        let filteredThings;
        if(isCompleted === "active") {
            filteredThings = req.session.todolist.filter(chore => chore.isCompleted === false);
        } else if (isCompleted === "completed") {
            filteredThings = req.session.todolist.filter(chore => chore.isCompleted === true);
        } else {
            next(); return;
        }
        res.render("filtered", {
            filteredThings
        })
    }

}

module.exports = displayController;