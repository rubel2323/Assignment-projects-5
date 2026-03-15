// Common function for donation-history
// function donationHistory(id) {
//   document.getElementById(id).addEventListener("click", function ()
function createHistory(id) {
  const history = document.querySelector("#donation-history");

  const create = document.createElement("section");
  create.innerHTML = `<div class="card bg-base-100  shadow-md m-8 card-xl">
  <div class="card-body">
    <h2 class="card-title">Donation</h2>
    <p class="text-xl font-md">My donation for ${id} is ${inputValue}</p>
    <p>${new Date().toLocaleString()}</p>
  
    
  </div>
</div>`;

  history.appendChild(create);
}

document
  .getElementById("donation_for_quota_confirm_btn")
  .addEventListener("click", function () {
    createHistory("Quota Movement");
  });
document
  .getElementById("donation_for_feni_confirm_btn")
  .addEventListener("click", function () {
    createHistory("Feni flood");
  });
document
  .getElementById("donation_for_noakhali_confirm_btn")
  .addEventListener("click", function () {
    createHistory("Noakhali flood");
  });

// donationHistory("donation_for_feni_confirm_btn");
// donationHistory("donation_for_noakhali_confirm_btn");
