const list = [];
module.exports = function (app) {

    app.get('/api/list', function (req, res) {
        db.list.find({})
            .then(function (dbList) {
                res.json(dbList);
            })
            .catch(function (err) {
                res.json(err);
            })
    })
};

app.post('/add', function (req, res) {
    const todoObject = {
        name: req.body.TodoItem,
        completed: false
    }
    list.push(todoObject);
    res.redirect('/');
});

app.delete('/delete', function (req, res) {
    list.splice(req.body.index, 1);
    res.json(list);
    console.log(list);
});

app.put('/api/update', (req, res) => {
    list[req.body.ID].completed = !list[req.body.ID].completed;
    // res.json(list);
    res.status(200).json(list);
    // db.CollectionName.findOneAndUpdate({ _id: req.params.id }, {$set: { completed: req.body.completed}})
});
}
