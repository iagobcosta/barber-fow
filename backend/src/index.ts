import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/health', (req, res) => res.json({ status: 'ok' }));

import appointmentsRouter from './routes/appointments';
import prisma from './lib/prisma';

app.use('/appointments', appointmentsRouter);

app.listen(port, async () => {
  // warm Prisma connection
  try {
    await prisma.$connect();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Prisma connection warning', e);
  }
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});
