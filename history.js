// common function(2) for two buttons

function donateHistoryToggle(id) {
  document.getElementById("donation-card").classList.add("hidden");
  document.getElementById("donation-history").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

document
  .getElementById("top-donate-btn")
  .addEventListener("click", function () {
    donateHistoryToggle("donation-card");
    console.log("Hey");
  });

document
  .getElementById("top-history-btn")
  .addEventListener("click", function () {
    donateHistoryToggle("donation-history");
  });
