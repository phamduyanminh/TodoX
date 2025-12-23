import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            enum: ['Active', 'Completed'],
            default: 'Active'
        },
        completedAt: {
            type: Date,
            default: null
        },
        timestamps: true // Mongoose automatically adds createdAt and updatedAt fields
    }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;