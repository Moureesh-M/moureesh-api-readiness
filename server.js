require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB Connected");
      startServer();
    })
    .catch(err => {
      console.error("MongoDB connection failed. Starting server without DB connection.");
      console.error(err.message);
      startServer();
    });
} else {
  console.log("MONGO_URI not set. Starting server without DB connection.");
  startServer();
}