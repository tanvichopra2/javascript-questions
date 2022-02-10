function printArmstrongNum(number)
{
for (let i=1; i<=number;i++){
    if(isArmstrong(i))
    console.log(i)
}
}
function isArmstrong(number)
{
let numberOfDigits= number.toString().length
    let sum=0;
    let temp=number
    while (temp>0)  
{
    let remainder= temp%10
    sum+=remainder**numberOfDigits
    temp= parseInt(temp/10);
}
return sum==number
}
printArmstrongNum(200)
        
