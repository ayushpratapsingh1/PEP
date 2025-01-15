const accno = document.querySelector("#account");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const deposit = document.querySelector("#deposit");
const withdraw = document.querySelector("#withdraw");
const submit = document.querySelector("#submit");
const output = document.querySelector("#output");
let amount = 0;

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let messages = [];

    if (accno.value.length !== 10) {
        messages.push("Account Number should be 10 digits");
    }

    if (password.value.length < 8) {
        messages.push("Password should be at least 8 characters");
    }

    if (password.value !== confirmPassword.value) {
        messages.push("Password and Confirm Password do not match");
    }

    if (!email.value) {
        messages.push("Email is required");
    }

    if (!deposit.checked && !withdraw.checked) {
        messages.push("Please select either Deposit or Withdraw");
    }

    if (messages.length > 0) {
        output.innerHTML = messages.join("<br>");
        return;
    }

    const amountValue = parseInt(document.querySelector("#amount").value);

    if (deposit.checked) {
        amount += amountValue;
    }

    if (withdraw.checked) {
        if (amount >= amountValue) {
            amount -= amountValue;
        } else {
            messages.push("Insufficient Balance");
        }
    }

    if (messages.length > 0) {
        output.innerHTML = messages.join("<br>");
    } else {
        output.innerHTML = `Account Number: ${accno.value}<br>Email: ${email.value}<br>Amount: ${amount}`;
    }
});