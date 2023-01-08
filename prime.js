let x=13;
let count=0;
for(let i=0;i<=x.length-1;i++){
if(x%i==0){
count++;
}
}
if(count==2){
console.log("Prime number");}
else {
console.log("Not a prime number");}
