const sentence = "My favourite icecream is also my sister's favourite icecream"
function repeatedWords(string)
{
    let words = new Set()
    let wordsArray= string.split(" ")
    len = wordsArray.length
    for(let i=0; i<len; i++)
    {
        if(words.has(wordsArray[i]))
        {
            console.log(wordsArray[i]);
        }
        words.add(wordsArray[i])
    }
}

repeatedWords(sentence)

