import express, { Request, Response } from 'express';
import { synchronizeDatabase } from './adapter/DatabaseSynchronizer';
import { registerRouters } from './adapter/RouterRegistry';

const app = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('EMA');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

registerRouters(app);
synchronizeDatabase();
