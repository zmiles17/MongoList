const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todoItem: {
        itemName: {
            type: String,
            unique: true,
            required: "Enter a valid list item"
        },
        completed: {
            type: Boolean
        }
    }
})

let todoList = mongoose.model('todoList', todoSchema);

module.exports = todoList;