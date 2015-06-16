// Math.random() devuelve número aleatorio entre 0 y 1.

// Version Toni Coll Barber

var numero = Math.random();

var str =' MAYOR que 0,5';

if (numero <= 0.5){
  str = ' MENOR que 0,5';
}

console.log('\n' + numero + str + '\n');
