/*************** 
    CODE EVEN OR ODD
***************/

const userEvenOrOdd = prompt('Scegli tra pari o dispari', 'scrivi in minuscolo'); //dichiarazione variabile per indicare la scelta dell'utente
//console.log('Scelta inserita:', userEvenOrOdd);
let userNumber = Number(prompt('Scegli tra 1 e 5')); //dichiarazione variabile per indicare il numero scelto dall'utente
//console.log('Numero scelto:', userNumber);

/*
* Funzione per generare un numero casuale (sempre da 1 a 5)
* per il computer
*/

function genNumber(){
    const computerNumber = Math.floor(Math.random()*5 + 1); //dichiarazione variabile che genera randomicamente un numer da 1 a 5
    return computerNumber; //riprendo il numero generato e lo porto fuori dalla funzione
}

let computerNumber = genNumber();
//console.log('Numero generato per il computer:',computerNumber);
let result = userNumber + computerNumber; //dichiarazione variabile della somma dei due numeri
//console.log('Somma dei due numeri:', result);

/*
* Funzione per indicare se il risultato dei due numeri
* e' pari o dispari
*/

function EnveOrOdd(){

    /*
    * if per capire se la somma dei numeri e' pari
    * o dispari
    */
    
    if(result == 2,4,6,8,10){
        document.querySelector('#output-message').innerHTML = `La somma dei numeri e' pari`; //dichiarazione per scrivere all'interno di HTML
    } else if (result == 3,5,7,9) {
        document.querySelector('#output-message').innerHTML = `La somma dei numeri e' dispari`; //dichiarazione per scrivere all'interno di HTML
    } else {
        document.querySelector('#output-message').innerHTML = `Error.. riprovare`; //dichiarazione per scrivere all'interno di HTML
    }
}

userNumber = document.querySelector('#output-userNumber').innerHTML = `Numero utente: ${userNumber}`; //dichiarazione per scrivere all'interno di HTML
computerNumber = document.querySelector('#output-computerNumber').innerHTML = `Numero computer: ${computerNumber}`; //dichiarazione per scrivere all'interno di HTML
result = document.querySelector('#output-sum').innerHTML = `Somma dei numeri: ${result}`; //dichiarazione per scrivere all'interno di HTML
EnveOrOdd(); //dichiarazione per scrivere all'interno di HTML

/*
* if per capire se ha vinto l'utente o
* il computer
*/

if(userEvenOrOdd === EnveOrOdd){
    document.querySelector('#output-winOrLoss').innerHTML = `Hai perso!`;
    document.querySelector('#output-winOrLoss').classList.add('text-danger');
} else {
    document.querySelector('#output-winOrLoss').innerHTML = `Hai vinto!`;
    document.querySelector('#output-winOrLoss').classList.add('text-success');
}