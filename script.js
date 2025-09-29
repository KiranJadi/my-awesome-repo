// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("button");
  toggle.textContent = "🌙 Toggle Dark Mode";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  toggle.style.padding = "10px";
  toggle.style.border = "none";
  toggle.style.borderRadius = "5px";
  toggle.style.backgroundColor = "#3498db";
  toggle.style.color = "#fff";
  toggle.style.cursor = "pointer";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Time-Based Greeting
window.addEventListener("load", () => {
  const hour = new Date().getHours();
  let greeting = "Welcome";

  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  const header = document.querySelector("header p");
  if (header) header.textContent = `${greeting}, I'm Kiran — Mainframe Developer & Automation Enthusiast`;
});