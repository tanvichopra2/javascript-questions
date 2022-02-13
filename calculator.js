
function add(number1, number2){
    if(typeof(number1) === 'string'){
        return "Invalid Input";
    }
    if(Array.isArray(number1)){
        return "invalid input"
    }
    if(number1>10000 || number2>10000){
        return "number exceeds given range"
    }
    if(number1 && !number2){
        return number1;
    }
    return number1 +number2;
}

module.exports=add;