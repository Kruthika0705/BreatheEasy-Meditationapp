const circle = document.querySelector(".breathing-circle");
const timerDisplay = document.querySelector("#timer-display");
let timer;
let timeLeft = 60;

// 📈 Progress Tracking
let meditationCount = localStorage.getItem("meditationCount") || 0;
document.getElementById("progress-status").innerText = `You have meditated ${meditationCount} times`;

function startBreathingTimer(duration = 60) {
  timeLeft = duration;
  timerDisplay.textContent = `${timeLeft}s`;
  clearInterval(timer);

  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Done!";
      meditationCount++;
      localStorage.setItem("meditationCount", meditationCount);
      document.getElementById("progress-status").innerText = `You have meditated ${meditationCount} times`;
    }
  }, 1000);
}

// 🎙️ Voice Guidance
const voiceBtn = document.getElementById("voice-btn");
voiceBtn.addEventListener("click", () => {
  const message = new SpeechSynthesisUtterance("Breathe in... Hold... Breathe out...");
  speechSynthesis.speak(message);
});

// 🎵 Relaxing Sound
const soundBtn = document.getElementById("sound-btn");
const audio = new Audio("relaxing-sound.mp3"); // You need to provide your own audio file
soundBtn.addEventListener("click", () => {
  audio.paused ? audio.play() : audio.pause();
});

// 🌙 Dark Mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🔔 Daily Notification Reminder
function requestReminder() {
  if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        scheduleDailyReminder();
        alert("Daily mindfulness reminder enabled!");
      } else {
        alert("Notification permission denied.");
      }
    });
  }
}

function scheduleDailyReminder() {
  const now = new Date();
  const reminderHour = 20; // 8 PM
  const delay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), reminderHour, 0, 0) - now;

  setTimeout(() => {
    new Notification("🧘 Time to take a deep breath and meditate!");
    scheduleDailyReminder(); // Repeat every 24 hours
  }, delay > 0 ? delay : delay + 86400000);
}
document.getElementById("sound-btn").addEventListener("click", function () {
    const audio = document.getElementById("relaxing-audio");
  
    if (audio.paused) {
      audio.play();
      this.textContent = "⏸ Pause Sound";
    } else {
      audio.pause();
      this.textContent = "🎵 Relaxing Sound";
    }
  });
  