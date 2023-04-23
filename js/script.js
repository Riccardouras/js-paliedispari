const bodY = document.getElementById("body")
let word = prompt("inserisci parola");
function IsPalindrome(word){
    let len = word.length;
    word.toLowerCase()
     for(let i = 0; i < len/2; i++){
      if(word[i] === word[len - 1 - i]){
        return true
      }
      else {
        return false
    } 

}
}

let check= IsPalindrome(word)
function creatEl() {
    const x = document.createElement("h1");
    if (check) {
        x.innerHTML= "True"
    }else {
        x.innerHTML= "False"
    } 
    document.body.appendChild(x);

}
creatEl()