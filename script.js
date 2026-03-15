document.getElementById("toggle-blog").addEventListener("click", function () {
  // toggle("toggle-blog");
  window.location.href = "./blog.html";
});
document.getElementById("toggle-home").addEventListener("click", function () {
  // toggle("toggle-home");
  window.location.href = "./index.html";
});

// common function by class for btn-active
function activeButton(id) {
  document
    .getElementById("top-donate-btn")
    .classList.remove("bg-brand-btn-primary");
  document
    .getElementById("top-history-btn")
    .classList.remove("bg-brand-btn-primary");
  document.getElementById(id).classList.add("bg-brand-btn-primary");
}

document
  .getElementById("top-donate-btn")
  .addEventListener("click", function () {
    activeButton("top-donate-btn");
  });

document
  .getElementById("top-history-btn")
  .addEventListener("click", function () {
    activeButton("top-history-btn");
  });
