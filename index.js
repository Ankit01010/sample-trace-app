const express = require('express');
const { startTracing, trace } = require('@google-cloud/trace-agent');
const app = express();
const port = 8080;

// Initialize the trace agent
startTracing();

// Sample endpoint with tracing
app.get('/', (req, res) => {
  trace.createChildSpan({ name: 'sample-endpoint' }, () => {
    res.send('Hello, Cloud Trace!');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
