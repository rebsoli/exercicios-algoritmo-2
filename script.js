function limpar(id) {
  document.getElementById(`${id}`).value = null;
}

function limparTudo() {
  function campos(id) {
    document.getElementById(`${id}`).innerHTML = "";
  }
  campos("operacoes");
  campos("divisao");
  campos("resultado_quadrado");
  campos("maior_ou_menor");
  campos("par_ou_impar");
  campos("salario_liquido");
}

function alert() {
  swal.fire("Opa!", "Você não preencheu todos os campos", "warning");
}

function calcular() {
  let operacoes = document.querySelector("#operacoes");
  let valor1 = parseInt(document.querySelector("#valor1").value);
  let valor2 = parseInt(document.querySelector("#valor2").value);

  if (
    document.getElementById("valor1").value == "" ||
    document.getElementById("valor2").value == ""
  ) {
    alert();
  } else {
    operacoes.innerHTML = `O resultado da soma é ${
      valor1 + valor2
    } <br> O resultado da subtração é ${
      valor1 - valor2
    } <br> O resultado da multiplicação é ${valor1 * valor2}`;
    let divisao = document.querySelector("#divisao");
    if (valor2 == 0) {
      swal.fire(
        "Erro!",
        "Operação inválida! Não é possível dividir um número por zero",
        "error"
      );
      divisao.style.color = "red";
      divisao.style.fontWeight = "bold";
    } else {
      divisao.innerHTML = `O resultado da divisão é ${(valor1 / valor2).toFixed(
        2
      )}`;
      divisao.style.color = "black";
      divisao.style.fontWeight = "normal";
    }
  }
  limpar("valor1");
  limpar("valor2");
}

function quadrado() {
  let quadrado = parseFloat(document.getElementById("quadrado").value),
    resultado = document.getElementById("resultado_quadrado");

  if (document.getElementById("quadrado").value == "") {
    alert();
  } else {
    resultado.innerHTML = `O quadrado de ${quadrado} é ${quadrado * quadrado}`;
    limpar("quadrado");
  }
}

function maiorOuMenor() {
  let num1 = document.getElementById("num1").value,
    num2 = document.getElementById("num2").value,
    resultado = document.getElementById("maior_ou_menor");

  if (num1 == "" || num2 == "") {
    alert();
  } else {
    if (num1 > num2) {
      resultado.innerHTML = `${num1} é maior que ${num2}`;
    } else if (num2 > num1) {
      resultado.innerHTML = `${num2} é maior que ${num1}`;
    } else {
      resultado.innerHTML = `${num1} é igual a ${num2}`;
    }
    limpar("num1");
    limpar("num2");
  }
}

function parOuImpar() {
  let num = document.getElementById("num").value,
    resultado = document.getElementById("par_ou_impar");

  if (num == "") {
    alert();
  } else {
    if (num % 2 == 0) {
      resultado.innerHTML = `${num} é par`;
    } else {
      resultado.innerHTML = `${num} é ímpar`;
    }
    limpar("num");
  }
}

function salarioLiquido() {
  let horaAula = document.getElementById("hora_aula").value,
    nAulasDadas = document.getElementById("n_aulas_dadas").value,
    desconto = document.getElementById("desconto").value / 100,
    descontoFinal = (horaAula * nAulasDadas * desconto).toFixed(2),
    resultado = document.getElementById("salario_liquido");

  if (
    horaAula == "" ||
    nAulasDadas == "" ||
    document.getElementById("desconto").value == ""
  ) {
    alert();
  } else {
    resultado.innerHTML = `Seu salário bruto é = R$${
      horaAula * nAulasDadas
    } <br> O desconto foi = R$${descontoFinal} <br> 
    Seu salário líquido é de R$${horaAula * nAulasDadas - descontoFinal}
    `;

    limpar("hora_aula");
    limpar("n_aulas_dadas");
    limpar("desconto");
  }
}
