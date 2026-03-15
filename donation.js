document
  .getElementById("donation_for_quota_confirm_btn")
  .addEventListener("click", function () {
    // 1.catching input fields

    const inputValue = document.getElementById(
      "input_for_donation_for_quota",
    ).value;

    //    2.catching current-total balance for quota
    const currentBalance = document.getElementById(
      "total_balance_for_quota",
    ).innerText;

    //  3.adding donated balance and show
    const totalDonatedBalance =
      parseFloat(inputValue) + parseFloat(currentBalance);
    document.getElementById("total_balance_for_quota").innerText =
      totalDonatedBalance;

    //4.catching  my account balance
    const myPreviousBalance =
      document.getElementById("my_account_balance").innerText;

    // 5.update my account balance and show
    const myFinalBalance = parseFloat(myPreviousBalance) - totalDonatedBalance;
    document.getElementById("my_account_balance").innerText = myFinalBalance;
  });
