//Prvi zadatak
let brojevi = [3, 5, 6, 7];
function doubleNumbers(brojevi) {
  return brojevi.map((broj) => broj * 2);
}
console.log(doubleNumbers(brojevi));

//Drugi zadatak
let niz = [4, 76, -446, -4];
function findNegatives(niz) {
    return niz.filter(broj => broj < 0);


}
console.log(findNegatives(niz));