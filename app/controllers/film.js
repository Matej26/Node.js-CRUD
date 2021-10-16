const db = require("../models");
const Film = db.films;

// Create and Save a new Film
exports.create = (req, res) => {
    Film.findOne({ where: { id: req.body.id } })
        .then(data => {
            if (data) {
                res.status(500).send({ 
                    status: 500,
                    reason: "This film already exists"
                });
            }
        });

    Film.create({
        id: req.body.id,
        title: req.body.title,
        year: req.body.year,
        director: req.body.director,
        length: req.body.length,
        rating: req.body.rating,
    })
    .then(data => res.send(data))
    .catch(() => res.status(500).send({
        status: 500,
        reason: "Invalid body value"  
    }));
};

// Retrieve all Films from the database.
exports.findAll = (req, res) => {
    Film.findAll()
        .then(data => res.send(data));
};

// Find a single Film with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Film.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({ message: `Cannot find film with id=${id}` })
            }
        });
};

// Update a Film by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Film.findOne({ where: { id: id } })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot find film with id=${id}` })
            }
        });
        
    Film.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            Film.findOne({ where: { id: id } })
                .then(data => res.send(data));
        } else {
            res.status(404).send({ message: `Cannot find film with id=${id}` });
        }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// Delete a Film with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Film.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.status(202).send({ message: `Successfully delete film with id=${id}` });
            } else {
                res.status(404).send({ message: `Cannot find film with id=${id}` });
            }
        })
        .catch(err => res.status(500).send({ message: err.message }));
};