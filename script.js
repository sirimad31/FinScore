const form = document.getElementById("financeForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get user input

    const income = Number(document.getElementById("income").value);

    const expenses = Number(document.getElementById("expenses").value);

    const savings = Number(document.getElementById("savings").value);

    const debt = Number(document.getElementById("debt").value);

    const emergency = Number(document.getElementById("emergency").value);

    const investment = Number(document.getElementById("investment").value);


    // Make sure income is valid

    if (income <= 0) {

        alert("Please enter a valid income.");

        return;

    }


    // --------------------------------
    // 1. SAVINGS SCORE - 25
    // --------------------------------

    const savingsRate = (savings / income) * 100;

    let savingsScore;

    if (savingsRate <= 5) {
        savingsScore = 5;
    }
    else if (savingsRate <= 10) {
        savingsScore = 10;
    }
    else if (savingsRate <= 20) {
        savingsScore = 17;
    }
    else if (savingsRate <= 30) {
        savingsScore = 21;
    }
    else {
        savingsScore = 25;
    }


    // --------------------------------
    // 2. SPENDING SCORE - 20
    // --------------------------------

    const expenseRatio = (expenses / income) * 100;

    let spendingScore;

    if (expenseRatio > 90) {
        spendingScore = 4;
    }
    else if (expenseRatio > 80) {
        spendingScore = 8;
    }
    else if (expenseRatio > 70) {
        spendingScore = 12;
    }
    else if (expenseRatio > 60) {
        spendingScore = 16;
    }
    else {
        spendingScore = 20;
    }


    // --------------------------------
    // 3. DEBT SCORE - 20
    // --------------------------------

    const debtRatio = (debt / income) * 100;

    let debtScore;

    if (debtRatio > 50) {
        debtScore = 3;
    }
    else if (debtRatio > 40) {
        debtScore = 7;
    }
    else if (debtRatio > 30) {
        debtScore = 11;
    }
    else if (debtRatio > 20) {
        debtScore = 16;
    }
    else {
        debtScore = 20;
    }


    // --------------------------------
    // 4. EMERGENCY FUND - 20
    // --------------------------------

    let emergencyScore = 0;

    if (expenses > 0) {

        const emergencyMonths = emergency / expenses;

        if (emergencyMonths < 1) {
            emergencyScore = 4;
        }
        else if (emergencyMonths < 2) {
            emergencyScore = 8;
        }
        else if (emergencyMonths < 3) {
            emergencyScore = 13;
        }
        else if (emergencyMonths <= 6) {
            emergencyScore = 17;
        }
        else {
            emergencyScore = 20;
        }

    }


    // --------------------------------
    // 5. INVESTMENT SCORE - 15
    // --------------------------------

    const investmentRate = (investment / income) * 100;

    let investmentScore;

    if (investmentRate === 0) {
        investmentScore = 0;
    }
    else if (investmentRate < 5) {
        investmentScore = 4;
    }
    else if (investmentRate <= 10) {
        investmentScore = 8;
    }
    else if (investmentRate <= 15) {
        investmentScore = 12;
    }
    else {
        investmentScore = 15;
    }


    // --------------------------------
    // FINAL SCORE
    // --------------------------------

    const totalScore =
        savingsScore +
        spendingScore +
        debtScore +
        emergencyScore +
        investmentScore;


    // --------------------------------
    // DISPLAY RESULTS
    // --------------------------------

    document.getElementById("score").textContent = totalScore;

    document.getElementById("savingScore").textContent =
        savingsScore + "/25";

    document.getElementById("spendingScore").textContent =
        spendingScore + "/20";

    document.getElementById("debtScore").textContent =
        debtScore + "/20";

    document.getElementById("emergencyScore").textContent =
        emergencyScore + "/20";

    document.getElementById("investmentScore").textContent =
        investmentScore + "/15";


    // --------------------------------
    // HEALTH STATUS
    // --------------------------------

    const status = document.getElementById("status");
    const message = document.getElementById("message");


    if (totalScore <= 30) {

        status.textContent = "🔴 Critical";

        message.textContent =
            "Your financial health needs significant improvement.";

    }
    else if (totalScore <= 50) {

        status.textContent = "🟠 Needs Improvement";

        message.textContent =
            "There are several areas where your financial health can improve.";

    }
    else if (totalScore <= 70) {

        status.textContent = "🟡 Fair";

        message.textContent =
            "You have a reasonable financial foundation, but there is room to improve.";

    }
    else if (totalScore <= 85) {

        status.textContent = "🟢 Healthy";

        message.textContent =
            "Great job! Your finances are in a healthy range.";

    }
    else {

        status.textContent = "🟢 Excellent";

        message.textContent =
            "Excellent! You are demonstrating strong financial habits.";

    }


    // Show result section

    const resultSection = document.getElementById("result");

    resultSection.classList.remove("hidden");

    resultSection.scrollIntoView({
        behavior: "smooth"
    });

});