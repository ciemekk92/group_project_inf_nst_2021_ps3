import express from 'express';
import { synchronizeDatabase } from './adapter/DatabaseSynchronizer';
import { registerControllers } from './adapter/ControllerRegistry';

import bodyParser from 'body-parser';
import { globalErrorHandler } from './middleware/GlobalErrorHandler';

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

registerControllers(app);
synchronizeDatabase();

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});