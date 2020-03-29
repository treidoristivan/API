require('dotenv').config();
const express = require('express'),
  cors = require('cors'),
  path = require('path'),

  // eslint-disable-next-line import/no-extraneous-dependencies
  morgan = require('morgan'),
  compression = require('compression'),
  bodyParser = require('body-parser'),

  // expressValidator = require('express-validator'),
  responseTime = require('response-time'),
  router = require('./Routes'),
  port = process.env.APP_PORT;

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use(bodyParser.json());

// app.use(expressValidator());
app.use(cors());
app.use(responseTime());
app.use(compression());
app.use(`/api/v${process.env.API_VERSION}`, router);
app.use('/images', express.static(path.join(__dirname, 'Public/Image')));
app.use('/icons', express.static(path.join(__dirname, 'Public/Icon')));
app.use(express.static(path.join(__dirname, 'Client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/Client/build/index.html`));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('===>>> Connected ===>>> ', port);
});
