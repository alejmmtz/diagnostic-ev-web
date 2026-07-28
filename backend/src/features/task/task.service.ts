import { CreateTaskDTO, Task } from './task.types';
import { pool } from '../../config/database';
import Boom from '@hapi/boom';

export const getTasksService = async (): Promise<Task[]> => {
  const query = 'SELECT id, title, completed, date  FROM tasks';
  const dbRequest = await pool.query(query);
  return dbRequest.rows;
};

export const getTaskByIdService = async (taskId: number): Promise<Task> => {
  const dbRequest = await pool.query(
    `SELECT id, title, completed, date" 
     FROM tasks WHERE id = $1`,
    [taskId]
  );

  if (dbRequest.rowCount === 0) {
    throw Boom.notFound('Order not found');
  }

  return dbRequest.rows[0];
};

export const createTaskService = async (task: CreateTaskDTO): Promise<Task> => {
  const query = `INSERT INTO tasks (title, completed)
    VALUES ($1, $2) 
     RETURNING *`;

  const dbRequest = await pool.query(query, [task.title, false]);

  return dbRequest.rows[0];
};

export const updateTaskService = async (taskId: number): Promise<Task> => {
  const dbRequest = await pool.query(
    `UPDATE tasks SET completed = $1
     WHERE id = $2 
     RETURNING *`,
    [true, taskId]
  );

  return dbRequest.rows[0];
};
