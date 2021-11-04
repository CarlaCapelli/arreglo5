let cantidad = Number(prompt(" cuantos numeros quiere sumar?"));
let arreglo: number[] = new Array(cantidad);
let resultado: number = 0;

for (let i: number = 0; i < cantidad; i++) {
  arreglo[i] = Number(prompt("ingrese el numero en la posicion", i));
  console.log("el numero en la posicion ", i, " es ", arreglo[i]);
  resultado = resultado + arreglo[i];
}
console.log("la suma total es = ", resultado);
