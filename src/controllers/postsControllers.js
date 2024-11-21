import getAllPosts from "../models/postsModel.js";

export async function listarPosts (req, res) {
        // Fetch all posts using `getAllPosts()`
    const posts = await getAllPosts();
        // Send successful response with status code 200 and the posts data
    res.status(200).json(posts);  
}
