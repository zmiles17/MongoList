const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todolist', { useNewUrlParser: true });
require('./routes/api-routes.js')(app);
app.listen(PORT, function () {
    console.log(`App is now listening on PORT ${PORT}`)
}); 