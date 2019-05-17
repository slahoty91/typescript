var Bank = /** @class */ (function () {
    function Bank(name, branch, address, custList, accList) {
        this.name = name;
        this.branch = branch;
        this.address = address;
        this.custList = custList;
        this.accList = accList;
    }
    return Bank;
}());
var Customer = /** @class */ (function () {
    function Customer(nameCus, custId, addressCus, accListCus1) {
        this.accListCus = [];
        this.nameCus = nameCus;
        this.custId = custId;
        this.addressCus = addressCus;
        this.accListCus.push(accListCus1);
    }
    Customer.prototype.test = function (ob1) {
        if (this.accListCus.indexOf(ob1) != -1) {
            console.log("Account number: " + ob1.accNumber + "\nBalance: " + ob1.balance + "\nName: " + this.nameCus);
        }
        else {
            console.log('This account dosenot belong to ' + this.nameCus);
        }
    };
    return Customer;
}());
var BankAcc = /** @class */ (function () {
    function BankAcc(accNumber, balance, accountType, custId) {
        this.accNumber = accNumber;
        this.balance = balance;
        this.accountType = accountType;
        this.custId = custId;
    }
    BankAcc.prototype.credit = function (amt) {
        this.balance += amt;
        console.log(amt + ".00 has been credited in your account current balance is " + this.balance + ".00");
    };
    BankAcc.prototype.debit = function (amt) {
        this.balance -= amt;
        console.log(amt + ".00 has been debited in your account current balance is " + this.balance + ".00");
    };
    return BankAcc;
}());
var account;
(function (account) {
    account[account["saving"] = 0] = "saving";
    account[account["current"] = 1] = "current";
})(account || (account = {}));
var cusAdd = {
    street: 50,
    locality: 'Jayanagar',
    city: 'Banglore'
};
var bankAdd = {
    street: 67,
    locality: 'Jayanagar',
    city: 'Banglore'
};
var ba1 = new BankAcc(3289, 5000, account.saving, 123);
var ba2 = new BankAcc(2345, 5000, account.current, 234);
var c1 = new Customer('Sid', 222, cusAdd, ba1);
c1.test(ba1);
