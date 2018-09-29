const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect('mongodb://zmiles1:hfwuxyvH6VsEVEr@ds119113.mlab.com:19113/firstdb', { useNewUrlParser: true });
require('./routes/api-routes.js')(app);
app.listen(PORT, function () {
    console.log(`App is now listening on PORT ${PORT}`)
}); 