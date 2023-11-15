/*************** 
    CODE POLINDROME NUMBER
***************/

const userWord = prompt('Inserisci una parola:', 'scrivi la parola in minuscolo'); //dichiarazione variabile della parola scelta dall'utente
//console.log('Parola inserita:', userWord);

/*
* Funzione per capire se la parola inserita
* dall'utente e' palindroma o no
*/

function palindromeWord(split){
    let splitWord = split.split('').reverse().join(''); //dichiarazione variabile in modalita' array e inverita
    return splitWord;
}

const splitWord = palindromeWord(userWord); //dichiarazione variabile della funzione che inverte la parola
//console.log('Parola invertita:', splitWord);

/*
* If per indicare se la parola invertita e' palindroma
* oppure no
*/

if(userWord == splitWord){
    document.querySelector('#output-message').innerHTML = `${userWord} è palindroma`; //dichiarazione per scrivere all'interno di HTML
} else {
    document.querySelector('#output-message').innerHTML = `${userWord} non è palindroma`; //dichiarazione per scrivere all'interno di HTML
}