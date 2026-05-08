const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Selamat Datang di EduCare</h1><p>Aplikasi siap dideploy!</p>');
});

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'UP', 
    uptime: process.uptime(),
    timestamp: new Date() 
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
