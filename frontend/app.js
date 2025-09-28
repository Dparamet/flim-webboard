const apiBaseUrl = 'https://flim-webboard.onrender.com/';  // URL ของ Web Service ที่ได้จาก Render

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
// ฟังก์ชันดึงข้อมูลกระทู้จาก API
async function fetchThreads() {
  const res = await fetch("/api/threads");
  const threads = await res.json();
  console.log("Threads: ", threads);
  // แสดงผลในหน้า HTML
  const threadList = document.getElementById("threadList");
  threads.forEach(thread => {
    const threadElement = document.createElement("div");
    threadElement.className = "card thread-card";
    threadElement.innerHTML = `
      <div class="card-body">
        <h5 class="thread-title">${thread.title}</h5>
        <p>${thread.body}</p>
      </div>
    `;
    threadList.appendChild(threadElement);
  });
}

// เรียกใช้งาน
fetchThreads();
