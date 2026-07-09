let temp=0;
let y=10;
let t1=0;
let t2=1;

console.log("Fibonacci Series:  ")
console.log(t1);
console.log(t2);
for (let i=3;i<=y;i++){
    temp=t1+t2;
    t1=t2;
    t2=temp;
    console.log(temp);
}