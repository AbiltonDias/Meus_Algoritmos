
var letras = "AAAABCBDBAC";
function ordenando(letras){
    
    var result= [];
    var resultado;
    var a
    var b
    var c
    var d
    var junto;   
    
    for (var i = 1; i < letras.length; i++) {
        
        if(letras.charAt(i) != null){
            result[i] = letras.charAt(i)
        
        if(result[i] === 'A'){
            a ==null ? a = 'A' : a += 'A'
            //console.log(' ---- '+ a + '----') 
        }if(result[i] === 'B'){
            b == null ? b = 'B' : b += 'B'
        }if(result[i] === 'C'){
            c == null ? c = 'C' : c += 'C'
        }if(result[i] === 'D'){
            d == null ? d = 'D' : d += 'D'
        }
        }
    }
    console.log('==========='+ a,b,c,d)
    junto = a + b + c + d;
    teste( a,b,c,d,junto)
}

// TESTE UNITARIO

function teste(a,b,c,d,junto){ 
    console.log("Valor esperado - AAAA e resultado foi " + a)
    console.log("Valor esperado - BBB e resultado foi " + b)
    console.log("Valor esperado - CC e resultado foi " + c)
    console.log("Valor esperado - D e resultado foi " + d)
    console.log("Valor esperado - AAAABBBCCD e resultado foi " + junto)
}

ordenando(letras)
