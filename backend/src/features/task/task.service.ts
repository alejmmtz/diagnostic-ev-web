import { createTaskDTO, Task } from './task.types';
import { pool } from '../../config/database';

export const getTasksService = async (): Promise<Task[]> => {
  const query = 'SELECT id, title, completed, date';
  const dbRequest = await pool.query(query);
  return dbRequest.rows;
};

export const createTaskService = async (task: createTaskDTO): Promise<Task> => {
  const query = `INSERT INTO tasks (title, completed)
    VALUES ($1, $2) 
     RETURNING *`;

  const dbRequest = await pool.query(query, [task.title, false]);

  return dbRequest.rows[0];
};
