var arr = [10, 20, 5, 15, 30, 1];
var min = arr[0];
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (min < arr[i]) {
        min = arr[i];
    }
    if (max > arr[i]) {
        max = arr[i];
    }
}
console.log('Min = ' + min + ' Max = ' + max);
var str = ['N', 'e', 'w', 's', 't', 'i', 'n', 'e'];
var tt = 'Sid';
//tt = 90;
console.log(tt);
/*
var str2 = "";
for(var j = str.length-1; j>0 ;j--){
     str2 += str[j];
}
console.log(str2);
*/
var i = 0;
var j = str.length - 1;
while (i <= j) {
    var temp = str[j];
    str[j] = str[i];
    str[i] = temp;
    i++;
    j--;
}
console.log(str);
var list = [10, 20, 30, 40];
for (var id in list) {
    console.log(id);
}
list.forEach(function (val, index) {
    console.log(val + " : " + index);
});
var day = 'Monday';
switch (day) {
    case 'Monday':
        {
            console.log('Monday morning bluse');
            break;
        }
    case 'Tuesday':
        {
            console.log('Tuesday is okay');
            break;
        }
    case 'Wednesday':
        {
            console.log('Wednesday');
            break;
        }
    case 'Thursday':
        {
            console.log('Thrusday');
            break;
        }
    case 'Friday':
        {
            console.log('Friday');
            break;
        }
    case 'Saturday':
        {
            console.log('Saturday');
            break;
        }
    default:
        console.log('Wrong day entered');
}
function Greet(name, msg) {
    if (msg === void 0) { msg = 'Good Morning'; }
    console.log('Hello ' + name + ' ' + msg);
}
Greet('Yash');
Greet('Yash', 'Good Evening');
var print2 = function (msg) { return console.log(msg); };
print2('Hi');
var Employee = /** @class */ (function () {
    function Employee(empCode, Name) {
        this.empCode = empCode;
        this.Name = Name;
    }
    return Employee;
}());
var emp1 = new Employee(1001, 'Yash');
console.log(emp1);
