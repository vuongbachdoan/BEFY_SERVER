// Import necessary packages
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");

// Config app
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/app", require("./routes/router_music"));
app.use("/api/v1/auth", require("./routes/router_auth"));

// Config Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Befy API Documentation',
            version: '1.0.0',
            description: 'I created this API for Befy music app!'
        },
        servers: [
            {
                url: process.env.SERVER_URL
            }
        ]
    },
    apis: ['./routes/*.js']
};
const swaggerSpec = swaggerJsdoc(options);
app.use('/api/v1/test', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Run app
const bootstrap = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);
    console.log("Connected to MongoDB");

    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server is running on port ${process.env.SERVER_PORT}`);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
bootstrap();
