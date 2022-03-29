require('dotenv').config();
const express = require('express');
const path = require('path')
const app = express()

const server = require('http').createServer(app);

const port = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

app.get('/health', async (req, res) => {
    res.send({
        status: "available"
    });
})

app.get('/*', async (req, res) => {
    res.sendFile(path.join(__dirname, '../react-ui/build', 'index.html'));
})

server.listen(port, function () {
    console.log(`Listening on - PORT:${port}`);
});

/******************************** GRACEFUL SHUTDOWN  **************************************/

// Read more about this at the following links
// https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/
// https://medium.com/@becintec/building-graceful-node-applications-in-docker-4d2cd4d5d392

// The signals we want to handle
// NOTE: although it is tempting, the SIGKILL signal (9) cannot be intercepted and handled
var signals = {
  'SIGHUP': 1,
  'SIGINT': 2,
  'SIGTERM': 15
};

// Do any necessary shutdown logic for our application here
const shutdown = (signal, value) => {
  console.log("Shutting down...");
  server.close(() => {
    console.log(`Server stopped by ${signal} with value ${value}`);
    process.exit(128 + value);
  });
};

// Create a listener for each of the signals that we want to handle
Object.keys(signals).forEach((signal) => {
  process.on(signal, () => {
    console.log(`Process received a ${signal} signal`);
    shutdown(signal, signals[signal]);
  });
});