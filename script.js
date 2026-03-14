// Common class for Toggle state
function toggle(id) {
  document.getElementById("toggle-home").classList.remove("hidden");
  document.getElementById("toggle-blog").classList.remove("hidden");
  document.getElementById(id).classList.add("hidden");
}

document.getElementById("toggle-blog").addEventListener("click", function () {
  // toggle("toggle-blog");
  window.location.href = "./index.html";
});
document.getElementById("toggle-home").addEventListener("click", function () {
  // toggle("toggle-home");
  window.location.href = "./blog.html";
});

// common class for btn-active
function activeButton(id) {
  document
    .getElementById("donate-btn")
    .classList.remove("bg-brand-btn-primary");
  document
    .getElementById("history-btn")
    .classList.remove("bg-brand-btn-primary");
  document.getElementById(id).classList.add("bg-brand-btn-primary");
}

document.getElementById("donate-btn").addEventListener("click", function () {
  activeButton("donate-btn");
});

document.getElementById("history-btn").addEventListener("click", function () {
  activeButton("history-btn");
});
