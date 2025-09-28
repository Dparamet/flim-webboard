const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// ให้ backend serve frontend ด้วย
app.use(express.static(path.join(__dirname, "frontend")));

// เพิ่ม route สำหรับ / เพื่อให้เซิร์ฟเวอร์ส่ง index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// ตัวอย่าง API สำหรับ threads
app.get("/api/threads", (req, res) => {
  const threads = [
    { id: 1, title: "Hello Forum", body: "This is the first thread!" },
    { id: 2, title: "Question 1", body: "Here's a thread about a question." },
  ];
  res.json(threads);
});

// ตัวอย่าง API สำหรับ /api/hello
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// ให้เซิร์ฟเวอร์รันที่พอร์ตที่ตั้งค่าไว้
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
