import express from 'express';
import http from 'http';
import { Request, Response } from 'express';
import os from 'os';

// Create the express server
const app = express();
const server = http.createServer(app);

// route for / that returns a simple html page with the hostname
app.get('/', (req: Request, res: Response) => {
  res.send(`<h1>Hello World!</h1><p>Host: ${os.hostname()}</p>`);
});

app.get('/log/time', (req: Request, res: Response) => {
  const currentTime = new Date().toLocaleTimeString();
  console.log(`Es ist ${currentTime} Uhr`);
  res.send(`<h1>Uhrzeit</h1><p>Es ist: ${currentTime} Uhr</p>`);
});

const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  // eslint-disable-next-line no-console
  console.log(`Express Server started on port ${serverPort}`);
});
