var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
	name: {
        type: String,
        required: true
    },
	description: {
        type: String,
        required: true
    },
	created_at: {
        type: Date,
        default: Date.now
    },
	closed_at: Date,
    status: {
        type: String,
        enum: ["Open", "In Progress", "Done", "Closed"],
        required: true
    },
    assignee: {
		type: Schema.Types.ObjectId,
		ref: "User"
    },
    comment: String
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;