//Funcion para generar numero aleatorio
const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 3);
};

//Verificar adivinanza
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
  if (numeroAdivinado === numeroSecreto) {
    console.log("¡Felicitaciones! ¡Adivinaste el número secreto!");
  } else if (numeroAdivinado > numeroSecreto) {
    console.log("El número secreto es menor. ¡Sigue intentando!");
  } else {
    console.log("El número secreto es mayor. ¡Sigue intentando!");
  }
};

//Exportar modulos
module.exports = {
  generarNumeroAleatorio,
  verificarAdivinanza,
};