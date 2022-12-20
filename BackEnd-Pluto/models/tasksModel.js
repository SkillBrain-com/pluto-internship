const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const { Schema } = mongoose;

const TaskSchema = new Schema({
    name: String,
    description: String,
    status: String,
    startDate: String,
    dueDate: String,
    priority: String,
    assignedBy: String,
    assigned: String
});

const TaskModel = mongoose.model('taskmodel', TaskSchema)

module.exports = TaskModel;