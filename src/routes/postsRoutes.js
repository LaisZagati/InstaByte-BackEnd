import express from "express";
import { listarPosts } from "../controllers/postsControllers.js";

const routes = (app) => {
        // Parse incoming JSON request bodies (middleware)
    app.use(express.json());
        // Route handler for GET requests to "/posts" endpoint
    app.get("/posts", listarPosts);
}

export default routes;


