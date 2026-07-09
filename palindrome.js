let num = 1234321;
let val = num;
let rem = 0;
let rev = 0;

while(num>0){
    rem = num%10;
    rev = (rev*10)+rem;
    num = Math.floor(num/10);
}

//console.log(rev);
if(val==rev){
    console.log(val+" is a Palindrome number");
}
else{
    console.log(val+" is not a Palindrome number!");
}