let hasOpenedBefore = false; // Track if bot has already welcomed

function toggleChatbot() {
  const box = document.getElementById("chatbotBox");
  const toggleBtn = document.getElementById("toggle");

  const isBoxVisible = box.style.display === "flex";

  if (isBoxVisible) {
    box.style.display = "none";
    toggleBtn.style.display = "block";
  } else {
    box.style.display = "flex";
    box.style.flexDirection = "column";
    toggleBtn.style.display = "none";

    // Show welcome message only on first open
    if (!hasOpenedBefore) {
      const messages = document.getElementById("chatbotMessages");
      messages.innerHTML += `<div class="message bot">Hello! I'm VinayakBot 🤖. How can I assist you today?</div>`;
      hasOpenedBefore = true;
    }

    // Scroll to bottom and focus input after opening
    setTimeout(() => {
      const messages = document.getElementById("chatbotMessages");
      messages.scrollTop = messages.scrollHeight;
      document.getElementById("chatInput").focus();
    }, 100);
  }
}

function handleKey(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const msg = input.value.trim();
  if (!msg) return;

  const messages = document.getElementById("chatbotMessages");
  messages.innerHTML += `<div class="message user">${msg}</div>`;
  input.value = "";

  // Simple bot response
  let reply = "Sorry, I didn't understand that. you can ask me about my project, contact, Social";
  const msgLower = msg.toLowerCase();

  if (msgLower.includes("hello") || msgLower.includes("hi")) {
    reply = "Hi! How can I help you today?";
  } else if (msgLower.includes("project")) {
     reply = `
      <strong>Here are some of my projects:</strong><br><br>
      <a href="https://vsnapinsta.vercel.app" target="_blank" class="projectl"> - Instagram clone - vsnapinsta</a><br>
      <a href="https://socialmediaanalyzer.streamlit.app" target="_blank" class="projectl"> - Social media Analyzer</a><br>
      <a href="https://vinayakfrontend.github.io/todolist" target="_blank" class="projectl"> - ToDoList</a>
    `;
  } else if (msgLower.includes("social")) {
    reply = `
      <strong>Here are my Social Media Links:</strong><br><br>
      <a href="https://www.linkedin.com/in/vinayakrgupta" target="_blank" class="projectl"> - Linkdin</a><br>
      <a href="https://github.com/VinayakFrontend" target="_blank" class="projectl"> - Github</a><br>
      <a href="https://vinayakfrontend.github.io/todolist" target="_blank" class="projectl">- WhatsApp</a>
    `;
  }else if (msgLower.includes("contact")) {
    reply = `You can contact me via the form or at <a href="mailto:vinayakgupta1614@gmail.com" target="_blank" class="projectl">mailto:vinayakgupta1614@gmail.com</a>.`;
  }

  setTimeout(() => {
    messages.innerHTML += `<div class="message bot">${reply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }, 500);
}
