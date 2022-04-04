
function fatorial(n) {
    fat= 1
    for( var contador= n; contador > 1; contador= contador - 1 ) {
       fat= fat * contador   
    }
   return fat 

}

console.log(fatorial(9))