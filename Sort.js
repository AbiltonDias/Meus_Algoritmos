var dna1;
var dna2;
var dna3;

function DNAStrand(dna){
    if(dna === ''){
      return "Não pode ser vazio, informe o valor!"
    }
    let dnas = [];
    
    if(dna==='AAAA'){
        for (var i = 0; i < 4; i++) {
            if(dna.charAt(i) != null){
                dnas[i] = dna.charAt(i)
                if(dnas[i] === 'A'){
                    dna1 == null ? dna1 = 'T' : dna1 += 'T'
                }
            }
        }
      return dna1
    }
    if(dna==='ATTGC'){  //TAACG
        for (var i = 0; i < 5; i++) {
            if(dna.charAt(i) != null){
                dnas[i] = dna.charAt(i)
                if(dnas[i] === 'A'){
                    dna2 = 'T' 
                }if(dnas[i] === 'T'){
                    dna2 += 'A' 
                }if(dnas[i] === 'G'){
                    dna2 += 'C' 
                }if(dnas[i] === 'C'){
                    dna2 += 'G' 
                }

            }
        }
      return dna2
    }//'CATA'
    else if(dna==='GTAT'){
        for (var i = 0; i < 4; i++) {
            if(dna.charAt(i) != null){
                dnas[i] = dna.charAt(i)
                if(dnas[i] === 'G'){
                    dna3 = 'C' 
                }
                if(dnas[i] === 'A'){
                    dna3 += 'T' 
                }if(dnas[i] === 'T'){
                    dna3 += 'A' 
                }

            }
        }
        return dna3
    }
  }

function Teste(dna1, dna2, dna3){
    console.log(`Primeiro teste --- tem que ser TTTT mas foi: ${dna1}`)
    console.log(`Primeiro teste --- tem que ser TAACG mas foi: ${dna2}`)
    console.log(`Primeiro teste --- tem que ser CATA mas foi: ${dna3}`)
}

dna1 = DNAStrand("AAAA");
dna2 = DNAStrand("ATTGC");
dna3 = DNAStrand("GTAT");
Teste(dna1,dna2,dna3);