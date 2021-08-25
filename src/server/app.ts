import express from 'express';
import { Response } from 'express';

const app = express();
const port = 8080;

app.get('/', (_, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(
    `random-question-generator app listening at http://localhost:${port}`
  );
});