const db = require('../models/model');

module.exports = function (app) {

    app.get('/api/list', function (req, res) {
        db.find({})
            .then(function (db) {
                console.log(db);
                res.json(db);
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            })
    })


    app.post('/add', function (req, res) {
        db.create(req.body)
            .then(function (db) {
                console.log(db);
                res.json(db);
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            })
    })

    app.delete('/delete', function (req, res) {
        db.remove(req.body)
            .then(function(db){
                res.json(db);
            })
            .catch(function(err){
                res.json(err)
            })
    });

    app.put(`/api/update/:id`, (req, res) => {
        db.findOneAndUpdate({ itemName: req.params.id }, { $set: { completed: req.body.completed } })
            .then(function (db) {
                console.log(db);
                res.json(db);
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            })
    });
}
