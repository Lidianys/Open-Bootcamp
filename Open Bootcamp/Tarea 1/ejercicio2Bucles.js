function functionIf(numeroIf) {
  if (numeroIf > 0) {
    return console.log( "Es un número positivo");
  }
  if (numeroIf < 0) {
    return console.log( "Es un número negativo");
  } else {
    return console.log( "Es cero");
  }
}
function functionWhile(numeroWhile) {
  while (numeroWhile < 3) {
    numeroWhile++;
    console.log("El número es ", numeroWhile);
  }
}
function functionDoWhile(numeroWhile) {
  do {
    numeroWhile++;
    console.log("El número es ", numeroWhile);
  } while (numeroWhile < 3);
  {
    console.log(numeroWhile);
  }
}
function functionFor() {
  for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
    numeroFor++;
    return console.log("El numero es ", numeroFor);
  }
}
function functionSwitch(estacion) {
  switch (estacion) {
    case'verano':
      console.log("Es verano");
      break;
    case 'invierno':
      console.log("Es invierno");
      break;
    case 'primavera':
      console.log("Es primavera");
      break;
    case 'otoño':
      console.log("Es otoño");
      break;
    default:
        console.log("No es una estación del año");
      break;
  }
}
functionIf(0);
functionWhile(2);
functionDoWhile(1);
functionFor();
functionSwitch('verano');
