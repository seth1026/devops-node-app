const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello DevOps! 🚀</h1>
    <p>App is running successfully on AWS EC2 with Docker + CI/CD</p>
    <p>Current Time: ${new Date().toISOString()}</p>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: "healthy",
    message: "Application is running smoothly",
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});