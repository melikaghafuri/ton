function transactionsFuncion() {
    let transactionsCounter = document.getElementById("transactions");
    let transactionsValue = Number(transactionsCounter.innerHTML);
    transactionsValue = transactionsValue + 1;
    transactionsCounter.innerHTML = transactionsValue;
}

setInterval(transactionsFuncion, 500);

