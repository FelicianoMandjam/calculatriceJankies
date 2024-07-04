const calcule = require("./calculatrice.js");

// Cas simple
test("Je veux faire une somme entre deux numéros entiers 1+1 doit me retourner 2", () => {
  expect(calcule(1, 1, "+")).toBe(2);
});

test("Si c'est une soustraction de 2-1 resultat doit être 1", () => {
  expect(calcule(2, 1, "-")).toBe(1);
});

test("Si c'est une multiplication de 2*1 resultat doit être 2", () => {
  expect(calcule(2, 1, "*")).toBe(2);
});

test("Si c'est une division de 2/1 resultat doit être 2", () => {
  expect(calcule(2, 1, "/")).toBe(2);
});

// Cas limites

// test('si je clique sur  a + a  ', () => {
//   expect(calcule("a", "+" , "a").toBe(null))
// })

// Cas Décimaux , sa sera arrondie
// test('si je choisi un numéro decimal 0,7 + 0,7 = 1', () => {
//   expect(calcule(0,7 ,"+", 0,7).toBe(1))
// })

// test('si je choisi un numéro decimal  0,8 + 0,7 = 2', () => {
//   expect(calcule(0,7 ,"+", 0,8).toBe(2))
// })

test("should give 3.34 for 10/3" , ()=>{
    expect(calcule(10 , 3 , "/")).toBe(3.33)
})

// test("si 2 + -1 donnera ",()=>{
//     expect(calcule(2 , "+" , -1).toBe(1))
// })

// test("si je lui passe chaines de caracrere vide ",()=>{
//     expect(calcule("" , "" , "").toBe(null))
// })
