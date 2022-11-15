function Calculate(wynik) 
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
        case 'pow':
            var result = potega(parseFloat(a),parseFloat(b));
            break;
         case 'log':
            var result = log2(parseFloat(a) );
            break;
           

    }
 
    document.getElementById('result').value = result;
}
function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}
function handlePalindrome(form) {
    form.result.innerHTML = palindrome(form.input.value);
}

function palindrome(a) {
    a = a.toLowerCase();
    for(let i in a) {
        if(a[i] != a[a.length - 1 - i])
            return false;
    }
    return true;
}

function sprawdzString(array){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(typeof element =="string"){
            return true
        }
        
      }
      return false
}
function przedostatni(array){
    if(sprawdzString(array)==false){
        let najwiekszy = 0;
        let predostatni = 0;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(element>najwiekszy){
                predostatni = najwiekszy;
                najwiekszy = element;

            }
        }
        return predostatni;
    } else {
        let najwiekszys ="";
        let predostatnis="";
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(element>najwiekszys){
                predostatnis = najwiekszys;
                najwiekszys = element;

            } 
        }
        return predostatnis;
    }
}
function handleAnagramForm(form){

    let a = form.inputbox3.value;
    let b = form.inputbox4.value;
    document.getElementById("anagramResult").innerHTML = przedostatni(a,b);
}
function rekurencja(a,b){
    if(a<b){
        return String(a) +" "+ String(rekurencja(a+1,b))
    }else{
    return a
    }
}
   function handlerekurencjaForm(form){
    let a = parseInt(form.inputbox5.value);
    let b = parseInt(form.inputbox6.value);
    document.getElementById("rekurencjaResult").innerHTML = rekurencja(a,b);
   }
   function potega(a,b){
    if(b!==0)
    return a * potega(a, b-1);
    return 1;

   }
   function log2(a){
    if(a>1)
    return 1 + log2(a/2);
    return 0;
   }
