import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { Request, Response, Next } from 'express';

const app = express();
const port = 8080;

// In !Development! mode we can set to log the requests
app.use(morgan('dev'));

// body-parser init, it will parse the incoming parameters into req body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (_: null, res: Response, next: Next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (_: null, res: Response) => {
  res.redirect('/api');
});

// Api route
app.route('/api').get((_: null, res: Response) => {
  res.sendFile(__dirname + '/public/api.html');
});

// Return single question
app.route('/api/question').get((_, res: Response) => {
  res.send('What is your favourite food?');
});

// 500 error handler
function clientErrorHandler(err: any, req: Request, res: Response, next: Next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

app.use(clientErrorHandler);

app.listen(port, () => {
  console.log(
    `random-question-generator app listening at http://localhost:${port}`
  );
});
