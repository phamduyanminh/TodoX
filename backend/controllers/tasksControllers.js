import Task from '../models/Task.js';


export const getAllTasks = async (req, res) => {
    try{
        const task = await Task.find().sort({createdAt: -1});
        res.status(200).json(task);
    }catch (err){
        console.error(`Error at getting all tasks: ${err}`);
        res.status(500).json({message: `Error at getting all tasks: ${err}`});
    }
};

export const createTask = async (req, res) => {
    try{
        const {title} = req.body;
        const task = new Task({title});
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err){
        console.error(`Error at creating task: ${err}`);
        res.status(500).json({message: `Error at creating task: ${err}`});
    }
};

export const updateTask = async (req, res) => {
    try{
        const {title, status, completedAt} = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {title, status, completedAt},
            {new: true}
        );

        if(!updateTask){
            return res.status(404).json({message: 'Task not found'});
        }

        res.status(200).json(updatedTask);
    } catch (err)
    {
        console.error(`Error at updating task: ${err}`);
        res.status(500).json({message: `Error at updating task: ${err}`});
    }
};

export const deleteTask = async (req, res) => {
    try{
        const deleteTask = await Task.findByIdAndDelete(req.params.id);

        if (!deleteTask){
            console.error(`Error at deleting task: ${err}`);
            res.status(404).json({message: 'Task not found'});
        }

        res.status(200).json(deleteTask);
    }catch (err){
        console.error(`Error at deleting task: ${err}`);
        res.status(500).json({message: `Error at deleting task: ${err}`});
    }
};