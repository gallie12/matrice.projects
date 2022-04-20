

function printLetters()
{   
    let string = "hello world!"
    let i = 0;
    let l = string.length;
    

    while (i <= l-1)
    {
      console.log(string[i])  
      i++
    }
    
}

module.exports = printLetters;

