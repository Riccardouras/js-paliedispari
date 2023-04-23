// const bodY = document.getElementById("body")
// let word = prompt("inserisci parola");
// function IsPalindrome(word){
//     let len = word.length;
//     word.toLowerCase()
//      for(let i = 0; i < len/2; i++){
//       if(word[i] === word[len - 1 - i]){
//         return true
//       }
//       else {
//         return false
//     } 

// }
// }

// let check= IsPalindrome(word)
// function creatEl() {
//     const x = document.createElement("h1");
//     if (check) {
//         x.innerHTML= "True"
//     }else {
//         x.innerHTML= "False"
//     } 
//     document.body.appendChild(x);

// }
// creatEl()
// pari dispari
//utente sceglie pari o dispari
let scelta = prompt("Scegli 2 per pari 1 per dispari");
// inserisci un numero
let numero = prompt("Inserisci un numero da 1 a 5")
//genera un numero ramdom da 1 a 5 
function random() {
    let r = Math.floor(Math.random() * 6);
    return r;
}
let r =random();
console.log(r)
let somma = somm(r, numero)
console.log(somma)
//somma
function somm(r,numero) {
    let somma = parseInt(numero) + r;
    return somma
}
function check() {
    if(somma % 2 == 0 && scelta == 2 || somma % 2 != 0 && scelta == 1){
        alert("Hai vinto")
      }
      //else if(somma % 2 != 0 && scelta == 1){
       // alert("Hai vinto")
//}
else{
    alert("Hai perso")
}
}
check()
