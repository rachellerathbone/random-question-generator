const express = require('express');
const app = express();
const port = 8080;
import { Response } from 'express';

app.get('/', (_, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(
    `random-question-generator app listening at http://localhost:${port}`
  );
});
