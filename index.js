require('dotenv').config();
const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const args = process.argv || [];
const test = args.some(arg => arg.includes('jasmine'));

const config = {
  databaseURI: process.env.DATABASE_URI,
  cloud: `${__dirname}/cloud/main.js`,
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',
};
const app = express();
if (!test) {
  const api = new ParseServer(config);
  app.use('/parse', api);
}

app.get('/', function (req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

const port = process.env.PORT || 1337;
if (!test) {
  const httpServer = require('http').createServer(app);
  httpServer.listen(port, async function () {
    console.log(`Parse Server is now live at ${new Date()}.`);
  });
}

module.exports = {
  app,
  config,
};
