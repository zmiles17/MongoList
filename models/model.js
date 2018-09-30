const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
        itemName: {
            type: String,
            unique: true,
            // required: [true, "Enter a valid list item"]
        },
        completed: {
            type: Boolean,
            default: false
        }
})

let todoList = mongoose.model('todoList', todoSchema);

module.exports = todoList;