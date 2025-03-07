import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.js';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mocksRouter = require("./routes/mocks.router");

const app = express();
const PORT = 8080;

// Middleware
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/mocksDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Rutas
app.use("/api/mocks", mocksRouter);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

