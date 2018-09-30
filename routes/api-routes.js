const db = require('../models/model.js');
const list = [];
module.exports = function (app) {

    app.get('/api/list', function (req, res) {
        db.todoList.find({})
            .then(function (dbtodoList) {
                res.json(dbtodoList);
            })
            .catch(function (err) {
                res.json(err);
            })
    })


    app.post('/add', function (req, res) {
        db.todoList.create(req.body)
            .then(function (dbtodoList) {
                res.json(dbtodoList);
            })
            .catch(function (err) {
                res.json(err);
            })
    })

    // app.delete('/delete', function (req, res) {
    //     list.splice(req.body.index, 1);
    //     res.json(list);
    //     console.log(list);
    // });

    app.put('/api/update', (req, res) => {
        const match = list.find(todo => todo.name === req.body.name);
        match.completed = req.body.completed;
        db.Todo.findOneAndUpdate({ itemName: req.params.id }, { $set: { completed: req.body.completed } })

            .then(function (dbtodoList) {
                res.json(dbtodoList);
            })
            .catch(function (err) {
                res.json(err);
            })
    });
}
