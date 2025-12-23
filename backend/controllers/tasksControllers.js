export const getAllTasks = (req, res) => {
    res.status(200).send('Hello World!');
};

export const createTask = (req, res) => {
    res.status(201).json({message: 'Task created'});
};

export const updateTask = (req, res) => {
    res.status(200).json({message: 'Task updated'});
};

export const deleteTask = (req, res) => {
    res.status(200).json({message: 'Task deleted'});
};