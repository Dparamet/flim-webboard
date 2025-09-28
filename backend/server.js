const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ให้ backend serve frontend ด้วย
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/api/threads", (req, res) => {
  const threads = [
    { id: 1, title: "Hello Forum", body: "This is the first thread!" },
    { id: 2, title: "Question 1", body: "Here's a thread about a question." },
  ];
  res.json(threads);
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
