const displayController = { 

    homePage: (req, res) => {
        res.render("home", {
            table : req.session.todolist,
            current: "home"
        });
    },

    filteredPage: (req, res, next) => {
        const isCompleted = req.params.isCompleted;
        let filteredThings;
        let currentCategory;
        if(isCompleted === "active") {
            filteredThings = req.session.todolist.filter(chore => chore.isCompleted === false);
            currentCategory = "active";
        } else if (isCompleted === "completed") {
            filteredThings = req.session.todolist.filter(chore => chore.isCompleted === true);
            currentCategory = "completed";
        } else {
            next(); return;
        }
        res.render("home", {
            table: filteredThings,
            current: currentCategory
        })
    }

}

module.exports = displayController;