import { Router } from 'express';
import {
  createTaskController,
  getTasksByIdController,
  getTasksController,
  updateTaskController,
} from './task.controller';

export const router = Router();

router.get('/', getTasksController);
router.get('/:id', getTasksByIdController);

router.post('/', createTaskController);

router.patch('/:id', updateTaskController);
