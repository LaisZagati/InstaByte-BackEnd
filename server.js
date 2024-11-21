// Import the Express framework for building web applications
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Create an Express application instance
const app = express();
routes(app)

// Start the server and listen for incoming requests on port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});