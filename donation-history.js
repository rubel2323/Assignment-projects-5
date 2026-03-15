document
  .getElementById("donation_for_quota_confirm_btn")
  .addEventListener("click", function () {
    const history = document.querySelector("#donation-history");

    const create = document.createElement("section");
    create.innerHTML = `<div class="card bg-base-100  shadow-md m-8 card-xl">
  <div class="card-body">
    <h2 class="card-title">Donation</h2>
    <p class="text-xl font-md">My donation for Quota Movement is ${inputValue}</p>
    <p>${new Date().toLocaleString()}</p>
  
    
  </div>
</div>`;

    history.appendChild(create);
  });
