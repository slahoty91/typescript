var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(data) {
        this.personData = data;
    }
    Person.prototype.display = function () {
        console.log("Name is " + this.personData.name + " and id is " + this.personData.id + " & \n        role is " + Roles[this.personData.role]);
    };
    return Person;
}());
var Roles;
(function (Roles) {
    Roles[Roles["doc"] = 0] = "doc";
    Roles[Roles["eng"] = 1] = "eng";
    Roles[Roles["acc"] = 2] = "acc";
})(Roles || (Roles = {}));
var p = {
    name: "Sid",
    id: 123,
    role: Roles.doc
};
var p1 = new Person(p);
p1.display();
// console.log(p1.name);
// console.log(p1.id);
// console.log(p1.display);
// console.log(Person);
var shape = /** @class */ (function () {
    function shape(l, b) {
        this.leangth = l;
        this.breadth = b;
    }
    shape.prototype.Area = function () {
        console.log(this.area);
    };
    shape.prototype.Display = function (sp) {
        console.log("Area of " + sp + " is " + this.area);
    };
    return shape;
}());
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square(l, b) {
        var _this = 
        // Super should be the first statement.
        _super.call(this, l, b) || this;
        _this.area = 0;
        return _this;
    }
    square.prototype.Area = function () {
        this.area = this.leangth * this.breadth;
        this.Display('Square');
    };
    return square;
}(shape));
var sq1 = new square(2, 3);
console.log(sq1.leangth);
console.log(sq1.breadth);
//sq1.Area();
//create customer,
// open bank acount,
// perform operation as credit, debit, checkBal,  
var Bank = /** @class */ (function () {
    function Bank(nm, br, adr, cust, bal) {
        this.name = nm;
        this.branch = br;
        this.address = adr;
        this.customerName = cust;
        this.balance = bal;
    }
    Bank.prototype.accountInfo = function () {
        console.log("Account Holder : " + this.customerName.name + "\nBranch : " + this.branch + "\nAccount Type : " + typeAcc[this.customerName.accountType]);
    };
    Bank.prototype.debitOrDebit = function (amt, opp) {
        if (opp == '-') {
            if (this.balance > amt) {
                this.balance = this.balance - amt;
                console.log("Your account has been debiteb " + amt + ".00 current balance is " + this.balance);
            }
            else {
                console.log("Insufficient Balance");
            }
        }
        else if (opp == '+') {
            this.balance += amt;
            console.log("Your account has been credited " + amt + ".00 current balance is " + this.balance + ".00");
        }
        else if (opp != '+' && opp != '-') {
            console.log("Wrong 2nd argument kindly use ' - ' (minus sign) for debit & ' + ' (plus sign) for credit ");
        }
    };
    Bank.prototype.checkBal = function () {
        console.log("Your current balance is " + this.balance);
    };
    return Bank;
}());
var typeAcc;
(function (typeAcc) {
    typeAcc[typeAcc["savings"] = 0] = "savings";
    typeAcc[typeAcc["current"] = 1] = "current";
})(typeAcc || (typeAcc = {}));
var adB = {
    streatNu: 23,
    locality: 'Jayanagar',
    city: 'banglore'
};
var adC = {
    streatNu: 48,
    locality: 'Inderanagar',
    city: 'Banglore'
};
var cus1 = {
    name: 'Sid',
    age: 26,
    address: adC,
    accountType: typeAcc.savings
};
var c1 = new Bank('HDFC', 'Jayanagar', adB, cus1, 5000);
c1.checkBal();
c1.accountInfo();
c1.debitOrDebit(3000, '-');
c1.debitOrDebit(2000, '+');
