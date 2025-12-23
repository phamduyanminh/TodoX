import 'dotenv/config';
import express from 'express';
import tasksRouter from '../routes/tasksRouter.js';
import { connectDB } from '../config/db.js';

const app = express();

connectDB();

app.use('/api/tasks', tasksRouter);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
