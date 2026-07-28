import { Request, Response } from 'express';
import {
  createTaskService,
  getTaskByIdService,
  getTasksService,
  updateTaskService,
} from './task.service';
import Boom from '@hapi/boom';

export const getTasksController = async (req: Request, res: Response) => {
  const tasks = await getTasksService();
  return res.json(tasks);
};

export const getTasksByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = await getTaskByIdService(Number(id));
  return res.json(order);
};

export const createTaskController = async (req: Request, res: Response) => {
  if (!req.body) {
    throw Boom.badRequest('Request body is required');
  }

  const { title } = req.body;

  if (!title) {
    throw Boom.badRequest('StoreId is required');
  }

  const newOrder = await createTaskService(req.body);
  return res.status(201).json(newOrder);
};

export const updateTaskController = async (req: Request, res: Response) => {
  if (!req.body) {
    throw Boom.badRequest('Request body is required');
  }

  const { id } = req.params;

  const updateOrder = await updateTaskService(Number(id));
  return res.json(updateOrder);
};
