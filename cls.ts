class Person{
    personData: IPerson;

    constructor(data: IPerson){
       this.personData = data; 
    }

    display(){
        console.log(`Name is ${this.personData.name} and id is ${this.personData.id} & 
        role is ${Roles[this.personData.role] }`);
    }
}
enum Roles{
    doc,
    eng,
    acc
}

interface IPerson{
    name:string;// to make optional
    id:number;
    role:Roles;
}
let p: IPerson = {
    name :"Sid",
    id : 123,
    role : Roles.doc
}
let p1 = new Person(p);
p1.display();
// console.log(p1.name);
// console.log(p1.id);
// console.log(p1.display);
// console.log(Person);

class shape{

    area:number;
    leangth:number;
    breadth:number;

    constructor(l:number,b:number){
        this.leangth = l;
        this.breadth = b;
    }

    Area(){
        
        console.log(this.area);
    }

    Display(sp:string){
       console.log( `Area of ${sp} is ${this.area}`);
    }
}

class square extends shape{

    constructor(l:number, b:number){
        // Super should be the first statement.
        super(l,b);
        this.area = 0;
    }

    Area(){
        this.area = this.leangth*this.breadth;  
        this.Display('Square');
        
    }
}

var sq1 = new square(2,3);
console.log(sq1.leangth);
console.log(sq1.breadth);
//sq1.Area();

//create customer,
// open bank acount,
// perform operation as credit, debit, checkBal,  

export class Bank{

    name:string;
    branch:string;
    address: Add;
    customerName: Cus;
    balance:number;
    

    constructor(nm:string,br:string,adr:Add,cust:Cus,bal:number){
        this.name = nm;
        this.branch = br;
        this.address = adr;
        this.customerName = cust;
        this.balance = bal;
    }

    accountInfo(){

        console.log(`Account Holder : ${this.customerName.name}\nBranch : ${this.branch}\nAccount Type : ${typeAcc[this.customerName.accountType]}`);

    }

    debitOrDebit(amt,opp){

        if(opp == '-'){

            if(this.balance > amt ){
                this.balance = this.balance - amt;
                console.log(`Your account has been debiteb ${amt}.00 current balance is ${this.balance}`);
            }else{
                console.log(`Insufficient Balance`);
            }

        }else if(opp == '+'){

            this.balance += amt;
            console.log(`Your account has been credited ${amt}.00 current balance is ${this.balance}.00`);

        }else if(opp != '+' && opp != '-'){

            console.log("Wrong 2nd argument kindly use ' - ' (minus sign) for debit & ' + ' (plus sign) for credit ");

        }

    }

    checkBal(){

        console.log(`Your current balance is ${this.balance}`);

    }


}



interface Add{

    streatNu: number,
    locality: string,
    city:string,

}

interface Cus{

    name:string,
    address: Add,
    age: number,
    accountType: typeAcc,

}

enum typeAcc{
    savings,
    current
}

let adB:Add = {

    streatNu: 23,
    locality:'Jayanagar',
    city: 'banglore'

}

let adC:Add = {

    streatNu: 48,
    locality: 'Inderanagar',
    city: 'Banglore'

}

let cus1:Cus = {

    name: 'Sid',
    age: 26,
    address: adC,
    accountType: typeAcc.savings

}

let c1 = new Bank('HDFC','Jayanagar',adB,cus1,5000);
c1.checkBal();
c1.accountInfo();
c1.debitOrDebit(3000,'-');
c1.debitOrDebit(2000,'+');