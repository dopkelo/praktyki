unction Calculate(wynik) 
{
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;  
 
    switch(wynik) 
    {
        case '+':
            var result = parseFloat(a) + parseFloat(b);         
        break;
        case '-':
            var result = parseFloat(a) - parseFloat(b);         
        break;  
        case 'x':
            var result = parseFloat(a) * parseFloat(b);         
        break;  
        case '/':
            var result = parseFloat(a) / parseFloat(b);         
        break;  
        case 'log2':
            var result = Math.log2(parseFloat(a) );
            break;

    }
 
    document.getElementById('result').value = result;
}
function Palindrom(){
    var c = getElementById('c').value;
    var odwrot;
    var t = true;
    var f = false;
    for (var i = c.length - 1; i >= 0; i--)
{
 odwrot += c[i];
}
if (c == odwrot)
var result2 = t;
else
 var result2 = f;

 document.getElementById('result2').value = result2;
}
