// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  numero = 1
  if (typeof(num1) != typeof(numero) || typeof(num2) != typeof(numero)) {
    return "Erro: parâmetros inválidos";
  } else {
    if (operador == "+") {
      return num1 + num2;
    }
    if (operador == "-") {
      return num1 - num2;
    }
    if (operador == "/") {
      if (num2 == 0 || num1 == 0){
        return "Erro: divisão por zero"
      } else {
        return num1 / num2;
      }
    } if (operador == "*") {
      return num1 * num2;
    } else {
      return "Erro: operação inválida"
    }
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };
