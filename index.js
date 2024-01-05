const express = require('express');
const { start } = require('@google-cloud/trace-agent');
const app = express();
const port = 8080;

// Set your GCP project ID
const projectId = 'whiz-dev-ankit';

// Initialize the trace agent with the project ID
start({ projectId });

// Sample endpoint without tracing
app.get('/', (req, res) => {
  res.send('Hello, Cloud Trace!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
