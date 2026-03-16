// let myFinalBalance;
// let inputParseFloat;
// document
//   .getElementById("donation_for_quota_confirm_btn")
//   .addEventListener("click", function () {
//     // 1.catching input fields

//     inputValue = document.getElementById("input_for_donation_for_quota").value;
//     // making countable
//     inputParseFloat = parseFloat(inputValue);
//     console.log("you have typed for donation is ", inputParseFloat);

//     //    2.catching current-total balance for quota
//     const currentBalance = document.getElementById(
//       "total_balance_for_quota",
//     ).innerText;
//     const totalQuotaBalance = parseFloat(currentBalance);
//     console.log("total balance for quota was", totalQuotaBalance);

//     //  3.adding donated balance and show
//     let totalDonatedBalance = inputParseFloat + totalQuotaBalance;
//     console.log("total balance for quota is now", totalDonatedBalance);

//     document.getElementById("total_balance_for_quota").innerText =
//       totalDonatedBalance;

//     //4.catching  my account balance
//     let myPreviousBalance =
//       document.getElementById("my_account_balance").innerText;
//     const parseFloatAccount = parseFloat(myPreviousBalance);
//     console.log("My main account balance was", parseFloatAccount);

//     // 5.update my account balance and show
//     myFinalBalance = parseFloatAccount - inputParseFloat;
//     console.log("My final balance is ", myFinalBalance);
//     document.getElementById("my_account_balance").innerText = myFinalBalance;
//     // document.getElementById("total_balance_for_quota").innerText =
//   });
let parserAccount;
let inputParseFloat;

function makeDonation(inputBtn, totalBalance) {
  // 1.catching input fields
  let inputValue = document.getElementById(inputBtn).value;

  // making donated value countable
  inputParseFloat = parseFloat(inputValue);
  console.log("you have typed for donation is ", inputParseFloat);

  //    2.catching current-total balance of individual section
  const currentBalance = document.getElementById(totalBalance).innerText;
  // making it countable by parsing
  let currentBalanceParser = parseFloat(currentBalance);

  //  3.adding donated balance into existing balances and show
  let totalDonatedBalance = inputParseFloat + currentBalanceParser;
  document.getElementById(totalBalance).innerText = totalDonatedBalance;

  //4.catching  my main account balance and making countable
  let myPreviousBalance =
    document.getElementById("my_account_balance").innerText;
  parserAccount = parseFloat(myPreviousBalance);

  // 5.update my main account balance and show
  let myFinalBalance = parserAccount - inputParseFloat;
  document.getElementById("my_account_balance").innerText = myFinalBalance;
  document.getElementById(inputBtn).value = "";
}

// History creation function
function createHistory(id) {
  const history = document.querySelector("#donation-history");

  const create = document.createElement("section");
  create.innerHTML = `<div class="card bg-base-100  shadow-md m-8 card-xl">
  <div class="card-body">
    <h2 class="card-title">Donation</h2>
    <p class="text-xl font-md">My donation for ${id} is ${inputParseFloat}</p>
    <p>${new Date().toLocaleString()}</p>
  
    
  </div>
</div>`;

  history.appendChild(create);
}

document
  .getElementById("donation_for_feni_confirm_btn")
  .addEventListener("click", function () {
    const inputInitial = parseFloat(
      document.getElementById("input_for_donation_for_feni").value,
    );
    const accountInitial = parseFloat(
      document.getElementById("my_account_balance").innerText,
    );
    if (inputInitial > 0 && accountInitial > inputInitial) {
      makeDonation("input_for_donation_for_feni", "total_balance_for_feni");

      modalCommon("my_modal_6");
      createHistory("Feni flood");
    } else {
      alert("you typed wrong digits");
    }
  });

// calculation for noakhali

document
  .getElementById("donation_for_noakhali_confirm_btn")
  .addEventListener("click", function () {
    const inputInitial = parseFloat(
      document.getElementById("input_for_donation_for_noakhali").value,
    );
    const accountInitial = parseFloat(
      document.getElementById("my_account_balance").innerText,
    );
    if (inputInitial > 0 && accountInitial > inputInitial) {
      makeDonation(
        "input_for_donation_for_noakhali",
        "total_balance_for_noakhali",
      );

      modalCommon("my_modal_6");
      createHistory("Noakhali flood");
    } else {
      alert("Donation for Noakhali floold is invalid");
    }
  });

document
  .getElementById("donation_for_quota_confirm_btn")
  .addEventListener("click", function () {
    const inputInitial = parseFloat(
      document.getElementById("input_for_donation_for_quota").value,
    );
    const accountInitial = parseFloat(
      document.getElementById("my_account_balance").innerText,
    );
    if (inputInitial > 0 && accountInitial > inputInitial) {
      makeDonation("input_for_donation_for_quota", "total_balance_for_quota");

      modalCommon("my_modal_6");
      createHistory("Quota Movement");
    } else {
      alert("Donation for Quota is not correct");
    }
  });

// makeDonation(
//   "donation_for_feni_confirm_btn",
//   "input_for_donation_for_feni",
//   "total_balance_for_feni",
// );
// makeDonation(
//   "donation_for_quota_confirm_btn",
//   "input_for_donation_for_quota",
//   "total_balance_for_quota",
// );
