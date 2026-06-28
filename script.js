// LifeOS AI JavaScript

document.addEventListener("DOMContentLoaded", () => {

  // Launch button
  const launchBtn = document.querySelector(".primary");
  if (launchBtn) {
    launchBtn.addEventListener("click", () => {
      alert("🚀 Welcome to LifeOS AI!");
    });
  }

  // Login button
  const loginBtn = document.querySelector(".login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      alert("Login feature coming soon!");
    });
  }

  // Card animation
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      card.style.transform = "scale(1.05)";
      setTimeout(() => {
        card.style.transform = "scale(1)";
      }, 200);
    });
  });

  // Contact form
  const contactButton = document.querySelector(".contact button");
  if (contactButton) {
    contactButton.addEventListener("click", () => {
      alert("Thank you! Your message has been sent.");
    });
  }

});
// =========================
// LifeOS AI - Advanced JS
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // Welcome
    console.log("LifeOS AI Started");

    // Launch Button
    const launchBtn = document.querySelector(".primary");
    if (launchBtn) {
        launchBtn.addEventListener("click", () => {
            alert("🚀 Welcome to LifeOS AI!");
        });
    }

    // Login Button
    const loginBtn = document.querySelector(".login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            alert("Login feature coming soon!");
        });
    }

    // Feature Card Animation
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

    // Contact Form
    const sendBtn = document.querySelector(".contact button");

    if (sendBtn) {
        sendBtn.addEventListener("click", () => {
            alert("Thank you! We received your message.");
        });
    }

    // Newsletter
    const subscribeBtn = document.querySelector(".newsletter button");

    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", () => {
            alert("Subscribed Successfully!");
        });
    }

    // Progress Bar Animation
    const progress = document.querySelector("progress");

    if (progress) {

        let value = 0;

        const timer = setInterval(() => {

            value += 2;

            progress.value = value;

            if (value >= 80) {

                clearInterval(timer);

            }

        }, 50);

    }

});

// =========================
// Notes
// =========================

function saveNotes(){

const notes=document.getElementById("notes");

if(notes){

localStorage.setItem("lifeos_notes",notes.value);

alert("Notes Saved");

}

}

window.onload=function(){

const notes=document.getElementById("notes");

if(notes){

notes.value=localStorage.getItem("lifeos_notes")||"";

}

}

// =========================
// Expense Tracker
// =========================

let totalExpense=0;

function addExpense(){

const input=document.getElementById("expense");

const total=document.getElementById("totalExpense");

if(!input || !total) return;

const amount=parseFloat(input.value);

if(isNaN(amount)){

alert("Enter a valid amount");

return;

}

totalExpense+=amount;

total.innerHTML="₹"+totalExpense;

input.value="";

}

// =========================
// AI Assistant
// =========================

function askAI(){

const q=document.getElementById("aiQuestion");

const ans=document.getElementById("aiAnswer");

if(!q || !ans) return;

const text=q.value.toLowerCase();

if(text.includes("study")){

ans.innerHTML="📚 Study for 45 minutes and take a 10 minute break.";

}

else if(text.includes("habit")){

ans.innerHTML="✅ Complete one habit at a time.";

}

else if(text.includes("goal")){

ans.innerHTML="🎯 Break your goal into smaller daily tasks.";

}

else{

ans.innerHTML="🤖 Keep learning and stay productive!";

}

q.value="";

}