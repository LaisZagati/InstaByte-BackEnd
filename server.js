import express from "express";

const posts = [
    {
        id: 1,
        description: "A test photo",
        image: "https://placecats.com/millie/300/150",
      },
      {
        id: 2,
        description: "Um lindo pôr do sol",
        image: "https://picsum.photos/seed/picsum/200/300",
      },
      {
        id: 3,
        description: "Gato curioso",
        image: "https://placekitten.com/200/300",
      }
];

const app = express();
app.use(express.json())


app.listen(3000, () => {
    console.log("Server is listening...");
});

app.get("/posts", (req, res) =>  {
    res.status(200).json(posts);
});

function getPostbyID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) =>  {
    const index = getPostbyID(req.params.id)
    res.status(200).json(posts[index]);
});