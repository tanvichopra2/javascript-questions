
const { it } = require('@jest/globals');
const add = require('../calculator');

describe('add function', function(){
    it('should give sum of 2 numbers', function(){
        const sum=add (2,3);
        expect(sum).toBe(5)
    });
    it('should give sum of number1 and number 2 if three inputs are given',function(){
        const sum=add(2,4,7)
        expect(sum).toBe(6);

    });
    it('should return number1 if only 1 input is given',function(){
        const sum= add(3)
        expect (sum).toBe(3)
    })
    it('should give invalid input if string is given as input',function(){
        const sum=add("tanvi");
        expect (sum).toBe("Invalid Input")
    });
    it('should give invalid input if array is given as input',function(){
        const sum=add([1,2,3]);
        expect(sum).toBe("invalid input")
    });
    it('should give invalid input when number exeeds the integer range',function(){
        const sum=add(1223354665757668,632764576464678)
        expect(sum).toBe('number exceeds given range')
        })

})