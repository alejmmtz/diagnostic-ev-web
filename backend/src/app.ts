import express from 'express';
import { NODE_ENV, PORT } from './config';
import cors from 'cors';

import { router as taskRouter } from './features/task/task.router';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World. This backend is up baby!');
});

app.use('/api/task', taskRouter);

if (NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
  });
}

export default app;
