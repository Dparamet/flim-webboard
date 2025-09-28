const apiBaseUrl = 'https://your-api-url.onrender.com/api/notes';  // URL ของ Web Service ที่ได้จาก Render

// ฟังก์ชันดึงข้อมูลโน้ตจาก API
async function fetchNotes() {
  const response = await fetch(apiBaseUrl);
  const notes = await response.json();
  console.log(notes);  // แสดงผลใน console
}

// ฟังก์ชันเพิ่มโน้ตใหม่
async function addNote(title, content) {
  const response = await fetch(apiBaseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  });
  const note = await response.json();
  console.log(note);  // แสดงผลใน console
}

// เรียกใช้งาน
fetchNotes();
fetch("/api/hello")
  .then(res => res.json())
  .then(data => {
    console.log(data.message);
    document.getElementById("output").textContent = data.message;
  });
