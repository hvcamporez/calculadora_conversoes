let saida = "";
let tipoConversor = 0;

do {
  saida += "Calculadora de conversões:\n";
  saida += "Escolha uma opção:\n\n";
  saida += "1 - Celsius para Fahrenheit\n";
  saida += "2 - Quilômetros para Milhas\n";
  saida += "3 - Sair\n\n";

  tipoConversor = parseInt(prompt(
    "Calculadora de conversões:\n\n" +
    "1 - Celsius para Fahrenheit\n" +
    "2 - Quilômetros para Milhas\n" +
    "3 - Sair\n\n" +
    "Escolha uma opção:"
  ));

  // Opção sair
  if (tipoConversor === 3) {
    saida += "Programa encerrado.\n";
    break;
  }

  let valorConverter = 0;
  let mensagem = "";

  switch (tipoConversor) {
    case 1:
      valorConverter = parseFloat(prompt("Informe o valor em Celsius:"));
      const fahrenheit = (valorConverter * 1.8) + 32;
      mensagem = `${valorConverter}ºC equivale a ${fahrenheit}ºF`;
      break;

    case 2:
      valorConverter = parseFloat(prompt("Informe o valor em Quilômetros:"));
      const milhas = valorConverter * 0.62137;
      mensagem = `${valorConverter}km equivale a ${milhas}mi`;
      break;

    default:
      mensagem = "Opção inválida";
      break;
  }

  saida += mensagem + "\n\n";

} while (tipoConversor < 3);

// Exibe tudo na tela
document.getElementById("saida").textContent = saida;