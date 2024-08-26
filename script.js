//Prvi zadatak
let brojevi = [3, 5, 6, 7];
function doubleNumbers(brojevi) {
  return brojevi.map((broj) => broj * 2);
}
console.log(doubleNumbers(brojevi));

//Drugi zadatak
let niz = [4, 76, -446, -4];
function findNegatives(niz) {
  return niz.filter((broj) => broj < 0);
}
console.log(findNegatives(niz));
//Treci
let proizvodi = ["okolokole", "mahunarka", "macak", "auto"];
function izbaciVisak(slova) {
  return slova.filter(function (slovo) {
    return slovo.length <= 5;
  });
}
console.log(izbaciVisak(proizvodi));
//Dugme i input


function dodajProizvod() {
  let inputElement = document.getElementById("noviProizvodi");
  let noviProizvod = inputElement.value;



  if (noviProizvod) {
    proizvodi.push(noviProizvod);
    console.log(proizvodi);
  }

};