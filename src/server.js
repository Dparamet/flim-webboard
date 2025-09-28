const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// เสิร์ฟไฟล์ static จาก frontend/ ซึ่งต้องอยู่ใน root directory
app.use(express.static(path.join(__dirname, "..", "frontend")));  // แก้ไขเส้นทางให้ถูกต้อง

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));  // แก้ไขเส้นทางให้ถูกต้อง
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

// รันเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
