function calcule(n1, n2, c) {
  if (c == "+") return n1 + n2;

  if (c == "-") return n1 - n2;

  if (c == "*") return n1 * n2;

  if (c == "/") {
    const resultat = n1 / n2;
    const resultatFixed = resultat.toFixed(2);
    return Number(resultatFixed);
  }
}
// console.log(calcule(1 , 1))
module.exports = calcule;
