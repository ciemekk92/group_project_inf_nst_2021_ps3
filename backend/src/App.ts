import express, { Request, Response } from 'express';
import { synchronizeDatabase } from './adapter/DatabaseSynchronizer';
import { registerControllers } from './adapter/ControllerRegistry';

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

registerControllers(app);
synchronizeDatabase();
