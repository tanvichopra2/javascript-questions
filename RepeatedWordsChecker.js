//const sentence = "My favourite icecream is also my sister's favourite icecream"
function repeatedWords(sentence, delimiter)
{/* 
    if(sentence.length===0){
        return ("empty string")
    } */
    if(typeof sentence!=='string')
    {
        return("invalid input")
    }

    sentence=sentence.toLowerCase()
    let words = new Set()
    let wordsArray= sentence.split(delimiter)
    len = wordsArray.length
    let finalarr=[]
    for(let index=0; index<len; index++)
    {
        if(words.has(wordsArray[index]))
        {
            
            finalarr.push(wordsArray[index]); }
        words.add(wordsArray[index])
    }
    console.log(finalarr)
    return finalarr
}
//repeatedWords(sentence, " ")
module.exports =  repeatedWords