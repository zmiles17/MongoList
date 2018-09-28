const list = [];
module.exports = function (app) {
    app.post('/add', function (req, res) {
        const todoObject = {
            name: req.body.TodoItem,
            completed: false
        }
        list.push(todoObject);
        res.redirect('/');
    })
    app.get('/', function (req, res) {
        res.json(list);
    })
    app.get('/api/list', function (req, res) {
        res.json(list);
    });
    app.delete('/delete', function (req, res) {
        list.splice(req.body.index, 1);
        res.json(list);
        console.log(list);
    })
    app.put('/api/update', (req, res) => {
        list[req.body.ID].completed = !list[req.body.ID].completed;
        // res.json(list);
        res.status(200).json(list);
        // db.CollectionName.findOneAndUpdate({ _id: req.params.id }, {$set: { completed: req.body.completed}})
    });
}
