const repeatedWords= require('../RepeatedWordsChecker')
 
describe('repeatedWords', function(){
    it('should give repeated words in a sentence', function(){
        let num =repeatedWords("My favourite icecream is also my sister's favourite icecream"," ")
        expect(num).toEqual(['my', 'favourite','icecream']) 
     })
     it('should give null if there are no repeated words in the string', function(){
        let num =repeatedWords("My favourite icecream is also sister's preferred"," ")
        expect(num).toEqual([]) 
    })
    it('should throw invalid input when input is not a string', function(){
        let num =repeatedWords(12345," ")
        expect(num).toBe('invalid input') 
    })
    it('should return repeated words if sentence is in uppercase or lowercase', function(){
        let num =repeatedWords("Hi hi yes"," ")
        expect(num).toEqual(['hi']) 
    })
})