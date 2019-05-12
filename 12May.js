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
/*
let obj1 = {
    name: "ABC",
    display: function(){
        console.log(this.name);
    }
}

obj1.display();
*/
var Obj = function (nm) {
    this.name = nm;
};
Obj.prototype.display = function () {
    console.log(this.name);
};
var ww = new Obj('Sid');
ww.display();
var Employee = /** @class */ (function () {
    function Employee() {
        this.fullName = 'John';
        this.address = 'Banglore';
    }
    return Employee;
}());
var company = /** @class */ (function (_super) {
    __extends(company, _super);
    function company() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    company.prototype.Display = function () {
        console.log(this.fullName);
    };
    return company;
}(Employee));
var obj1 = new company();
obj1.Display();
//console.log(obj1.address);
//let obj2 = new Employee();
var Person1 = /** @class */ (function () {
    function Person1() {
        this.roll = 123;
    }
    Object.defineProperty(Person1.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (myName) {
            if (myName !== '') {
                this._fullName = myName;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person1;
}());
var cust = /** @class */ (function (_super) {
    __extends(cust, _super);
    function cust() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cust.prototype.Display = function () {
        console.log("Roll is " + this.roll + " name is " + this.fullName);
    };
    return cust;
}(Person1));
var c12 = new cust();
c12.fullName = 'Siddharth Lahoty';
console.log(c12.fullName);
// let P1 = new Person1();
// P1.fullName ="Sidd";
// console.log(P1.fullName);
