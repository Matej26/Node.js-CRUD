module.exports = app => {
    const films = require("../controllers/film");
    var router = require("express").Router();

    // Create a new Film
    router.post("/", films.create);

    // Retrieve all Films
    router.get("/", films.findAll);

    // Retrieve a single Film with id
    router.get("/:id", films.findOne);

    // Update a Film with id
    router.patch("/:id", films.update);

    // Delete a Film with id
    router.delete("/:id", films.delete);

    app.use('/api/films', router);
}