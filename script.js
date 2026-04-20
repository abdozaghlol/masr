// إظهار البطاقات عند التصفح
window.addEventListener("scroll", () => {
  document.querySelectorAll(".project-card").forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});

// الجدول الزمني
function showTimeline() {
  const timeline = [
    { year: 2015, project: "إطلاق رؤية مصر 2030" },
    { year: 2018, project: "افتتاح قناة السويس الجديدة" },
    { year: 2020, project: "بدء العمل بالعاصمة الإدارية" },
    { year: 2025, project: "تطوير شبكة الطرق القومية" },
    { year: 2030, project: "تحقيق أهداف التنمية المستدامة" }
  ];

  let content = "<ul>";
  timeline.forEach(item => {
    content += `<li><strong>${item.year}:</strong> ${item.project}</li>`;
  });
  content += "</ul>";

  document.getElementById("timelineContent").innerHTML = content;
}

// التحكم في الموسيقى
const music = document.getElementById("bg-music");
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
