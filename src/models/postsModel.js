// Import the database connection function from a separate configuration file
import conectarAoBanco from "../config/dbConfig.js";

// Establish a connection to the database asynchronously
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Asynchronous function to fetch all posts from the database
export default async function getAllPosts() {
    // Access the "imersao-instabytes" database and "posts" collection
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
  
    // Retrieve all posts as an array using `find().toArray()`
    return await colecao.find().toArray();
  }
  