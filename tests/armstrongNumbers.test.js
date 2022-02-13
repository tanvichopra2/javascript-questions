const obj = require('../armstrongNumbers')

describe('isArmstrong Function', function(){
    it('should give true if it is an armstrong number', function(){
        let num = obj.isArmstrong(153)
        expect(num).toBe(true)  
    });
    it('should return false if its not an armstrong number',function(){
        let num= obj.isArmstrong(23)
        expect (num).toBe(false)
    })
    /* it('should give invlid input if input is string/array etc.',function(){
        let num= obj.isArmstrong('tanvi')
        expect (num).toBe('invalid input')
    })
    it ('should give invalid input if input is a negative number',function(){
        let num=obj.isArmstrong(-3)
        expect (num).toBe('invalid input')
    }) */
});

 describe('printArmstrongNum Function', function(){
     it('should print armstrong numbers from 1 to n', function(){
         const num = obj.printArmstrongNum(200)
         expect (num).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 153])
     })
     it ('should give invalid input if number is negative',function(){
         const num = obj.printArmstrongNum(-4)
         expect(num).toBe('invalid input')
     })
     it('should give invalid input if input is not a number',function(){
         const num=obj.printArmstrongNum('tanvi')
         expect (num).toBe('invalid input')
     })
     it('should return invalid input if number exceeds limit',function(){
         const num=obj.printArmstrongNum(83247274873598547588685)
         expect (num).toBe('invalid input')
     })
 } )