// Common class for Toggle state
function toggle(id) {
  document.getElementById("toggle-history").classList.remove("hidden");
  document.getElementById("toggle-blog").classList.remove("hidden");
  document.getElementById(id).classList.add("hidden");
}

document.getElementById("toggle-blog").addEventListener("click", function () {
  toggle("toggle-blog");
});
document
  .getElementById("toggle-history")
  .addEventListener("click", function () {
    toggle("toggle-history");
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
