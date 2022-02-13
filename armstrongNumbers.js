function printArmstrongNum(number)
{
    if(typeof (number)!=='number'|| number %1!=0)
    {
        return "invalid input"
    }
    if( number<0){
        return "invalid input"
    }
    if(number >32767){
        return "invalid input"
    }
    let armstrongArr= []
for (let index=1; index<=number;index++){
    if(isArmstrong(index))
    {
        armstrongArr.push(index)

    }
}
return armstrongArr

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
        
module.exports={
    printArmstrongNum,
    isArmstrong
} 
 