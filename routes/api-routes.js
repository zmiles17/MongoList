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
                console.log(req.body);
                res.json(db);
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            })
    })

    // app.delete('/delete', function (req, res) {
    //     list.splice(req.body.index, 1);
    //     res.json(list);
    //     console.log(list);
    // });

    app.put('/api/update', (req, res) => {
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
