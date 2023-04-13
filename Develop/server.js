// Dependencies
const express = require("express");
const apiPath = require("./public/apiPath.js");
const htmlPath = require("./public/htmlPath.js");

// Create an express server
const app = express();

// Create a port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api", apiPath);
app.use("/", htmlPath);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));