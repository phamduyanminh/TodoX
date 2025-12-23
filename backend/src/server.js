import 'dotenv/config';
import express from 'express';
import tasksRouter from '../routes/tasksRouter.js';
import { connectDB } from '../config/db.js';

const app = express();

connectDB();

app.use('/api/tasks', tasksRouter);

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});
