import express from 'express';
import cors from 'cors';

import config from './config.js';
import tripRouter from './routes/tripRouters.js';
import reviewRouter from './routes/reviewRouter.js';

const app = express();

app.use(cors());
app.use(express.json());


app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);

app.use('/api/trips/', tripRouter);
app.use('/api/reviews/', reviewRouter);