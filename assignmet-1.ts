var st:string = 'ABCD';
var ch = st.split("");
console.log(ch);
var i = 0;
var j = ch.length -1;
while( i < j){
    var temp = ch[i];
    ch[i] = ch[j];
    ch[j] = temp;
    i++;
    j--;
}
console.log(ch);
var st = ch.join("");
console.log(st);
