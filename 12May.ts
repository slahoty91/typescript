//Interface holds only signature of method.
//Can't creat object or instance.
//Along with method signature wecan create variables.
//Abstraction
// By default values are public
interface IPayment{
    transation(amount:number,interfaceNumber:string,userId):number;
    reversePayment(transationId:number);
}
/*
let obj1 = {
    name: "ABC",
    display: function(){
        console.log(this.name);
    }
}

obj1.display();
*/

let Obj = function(nm){
    this.name = nm;
}

Obj.prototype.display = function(){
    console.log(this.name);
}

let ww = new Obj('Sid');
ww.display();

class Employee{

    fullName:string;
    private address:string;

    constructor(){
        this.fullName = 'John';
        this.address = 'Banglore';
    }

}

class company extends Employee{

    Display(){
        console.log(this.fullName);
    }

}

let obj1 = new company();
obj1.Display();
//console.log(obj1.address);
//let obj2 = new Employee();
abstract class Person1{
    private _fullName:string;
    roll:number;
     constructor(){
        this.roll = 123;
    }
    get fullName(){
        return this._fullName;
    }
    set fullName(myName:string){
        if(myName !== ''){
            this._fullName = myName;
        }
    }
}

class cust extends Person1{
    Display(){
        console.log(`Roll is ${this.roll} name is ${this.fullName}`);
    }
}

let c12 = new cust();
c12.fullName = 'Siddharth Lahoty';
console.log(c12.fullName);


// let P1 = new Person1();
// P1.fullName ="Sidd";
// console.log(P1.fullName);

abstract class Department{
    name:string;
    Details(){

    }

   abstract DepStr();

}
class comp extends Department{
    DepStr(){

    }
}