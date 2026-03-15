// let myFinalBalance;
// let inputValue;
// document
//   .getElementById("donation_for_quota_confirm_btn")
//   .addEventListener("click", function () {
//     // 1.catching input fields

//     inputValue = document.getElementById("input_for_donation_for_quota").value;

//     //    2.catching current-total balance for quota
//     const currentBalance = document.getElementById(
//       "total_balance_for_quota",
//     ).innerText;

//     //  3.adding donated balance and show
//     let totalDonatedBalance =
//       parseFloat(inputValue) + parseFloat(currentBalance);
//     document.getElementById("total_balance_for_quota").innerText =
//       totalDonatedBalance;

//     //4.catching  my account balance
//     let myPreviousBalance =
//       document.getElementById("my_account_balance").innerText;

//     // 5.update my account balance and show
//     myFinalBalance = parseFloat(myPreviousBalance) - totalDonatedBalance;
//     document.getElementById("my_account_balance").innerText = myFinalBalance;
//   });
let myFinalBalance;
let inputValue;
let purpose;

// 1.catching input fields
function makeDonation(confirmBtn, inputBtn, totalBalance) {
  inputValue = document.getElementById(inputBtn).value;

  //    2.catching current-total balance for quota
  const currentBalance = document.getElementById(totalBalance).innerText;

  //  3.adding donated balance and show
  let totalDonatedBalance = parseFloat(inputValue) + parseFloat(currentBalance);
  document.getElementById(totalBalance).innerText = totalDonatedBalance;

  //4.catching  my account balance
  let myPreviousBalance =
    document.getElementById("my_account_balance").innerText;

  // 5.update my account balance and show
  myFinalBalance = parseFloat(myPreviousBalance) - totalDonatedBalance;
  document.getElementById("my_account_balance").innerText = myFinalBalance;
}

document
  .getElementById("donation_for_noakhali_confirm_btn")
  .addEventListener("click", function () {
    makeDonation(
      "donation_for_feni_confirm_btn",
      "input_for_donation_for_feni",
      "total_balance_for_feni",
    );
  });
document
  .getElementById("donation_for_noakhali_confirm_btn")
  .addEventListener("click", function () {
    makeDonation(
      "donation_for_noakhali_confirm_btn",
      "input_for_donation_for_noakhali",
      "total_balance_for_noakhali",
    );
  });
document
  .getElementById("donation_for_noakhali_confirm_btn")
  .addEventListener("click", function () {
    makeDonation(
      "donation_for_quota_confirm_btn",
      "input_for_donation_for_quota",
      "total_balance_for_quota",
    );
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
