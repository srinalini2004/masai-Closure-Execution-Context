function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        getCount: function () {
            console.log("Current count:", count);
        }
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();



function createBankAccount() {
    let balance = 0;
    let transactionHistory = [];

    return {
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push("Deposited: " + amount);
            console.log("Deposited:", amount);
        },
        withdraw: function (amount) {
            if (amount <= balance) {
                balance -= amount;
                transactionHistory.push("Withdrawn: " + amount);
                console.log("Withdrawn:", amount);
            } else {
                transactionHistory.push("Failed Withdrawal: " + amount);
                console.log("Insufficient balance");
            }
        },
        checkBalance: function () {
            console.log("Current balance:", balance);
        },
        getHistory: function () {
            console.log(transactionHistory);
        }
    };
}

const account2 = createBankAccount();
account2.deposit(300);
account2.withdraw(100);
account2.withdraw(500);
account2.getHistory();
