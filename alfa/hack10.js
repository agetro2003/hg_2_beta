/* * HACK-10 
     agregar después del item 500
     los alias qux y thud
     [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,qux,thud,600,700]
*/
console.log ("Arreglo original: ")
let array = [100, 200, 300, 400, 500, 600, 700];
console.log(array)

console.log ("Array con qux y thud despues de 500: ")
array.splice (5,0,"qux", "thud");
console.log (array)