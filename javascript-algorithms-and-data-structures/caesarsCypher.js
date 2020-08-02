function rot13(str) {
    const alphabet = {
        A: "N",
        B: "O",
        C: "P", 
        D: "Q",
        E : "R",
        F : "S",
        G: "T",
        H: "U",
        I: "V",
        J: "W",
        K : "X",
        L: "Y",
        M: "Z",
        N: "A",
        O : "B",
        P: "C",
        Q: "D",
        R: "E",
        S: "F",
        T: "G",
        U: "H",
        V: "I",
        W: "J",
        X: "K",
        Y: "L",
        Z: "M"
    }
     let cypher = "";
    for(let i = 0; i < str.length; i++){
        let letter = str.slice(i, i+1);
        if(alphabet.hasOwnProperty(letter)){
           cypher += alphabet[letter]
        } else{
          cypher += letter;
        }
    }
    return cypher;
  }
console.log(rot13("SERR PBQR PNZC"));