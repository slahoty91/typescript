class Bank{

    name: string;
    branch: string;
    address: add;
    custList:Array<Customer>;
    accList:Array<BankAcc>;

    constructor(name,branch,address,custList,accList){

        this.name = name;
        this.branch = branch;
        this.address = address;
        this.custList = custList;
        this.accList = accList; 

    }

}

class Customer {

    nameCus:string;
    custId:number;
    addressCus: add;
    accListCus:Array<BankAcc> = [];

    constructor(nameCus,custId,addressCus,accListCus1){

        this.nameCus = nameCus;
        this.custId = custId;
        this.addressCus = addressCus;
        this.accListCus.push(accListCus1);

    }

    test(ob1:BankAcc){

        if(this.accListCus.indexOf(ob1)!=-1){
            console.log(`Account number: ${ob1.accNumber}\nBalance: ${ob1.balance}\nName: ${this.nameCus}`);
        }else{
            console.log('This account dosenot belong to '+ this.nameCus);
        }
        
    }

}

class BankAcc {

    accNumber: number;
    balance: number;
    accountType: account;
    custId: number;

    constructor(accNumber,balance,accountType,custId){

        this.accNumber = accNumber;
        this.balance = balance;
        this.accountType = accountType;
        this.custId = custId;

    }

    credit(amt){

        this.balance += amt;
        console.log(`${amt}.00 has been credited in your account current balance is ${this.balance}.00`); 

    }

    debit(amt){

        this.balance -= amt;
        console.log(`${amt}.00 has been debited in your account current balance is ${this.balance}.00`); 

    }



}

enum account{
    saving,
    current
}




interface add{
    street:number,
    locality:string,
    city:string
}

let cusAdd:add = {

    street:50,
    locality: 'Jayanagar',
    city: 'Banglore'

}
let bankAdd:add = {

    street:67,
    locality: 'Jayanagar',
    city: 'Banglore'

}

let ba1 = new BankAcc(3289,5000,account.saving,123);
let ba2 = new BankAcc(2345,5000,account.current,234);
let c1 = new Customer('Sid',222,cusAdd,ba1);
c1.test(ba1);
