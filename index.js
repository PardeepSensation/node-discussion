const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let posts = [];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// View
app.get('/posts', (req, res) => {
  res.json({ posts: posts });
});

// Create
app.post('/posts', (req, res) => {
  const body = req.body;
  posts.push(body);
  res.json(body);
});

// Update
app.patch('/posts/:id', (req, res) => {
  const body = req.body;
  posts = posts.map((item) => {
    if (item.id === +req.params.id) {
      item = { ...body, id: item.id };
    }
    return item;
  });
  res.json(body);
});

app.delete('/posts/:id', (req, res) => {
  const id = req.params.id;
  posts = posts.filter((item) => item.id != id);
  console.log("SDFJKLDJ", posts)
  res.send("The post is deleted.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
