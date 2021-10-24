import { initServer, runServer } from './Server';

initServer().then((serv) => runServer(serv));

