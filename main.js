const campoSenha = document.querySelector("#campo-senha");
const numeroSenha = document.querySelector("#numero-senha");
const checkboxMaiusculas = document.querySelector("#usar-maiusculas");
const checkboxNumeros = document.querySelector("#usar-numeros");
const checkboxSimbolos = document.querySelector("#usar-simbolos");

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const simbolos = "#$%&*+-@?!";

let tamanhoSenha = 8;

function atualizaTamanhoNaTela() {
  numeroSenha.textContent = tamanhoSenha;
}

function geraSenha() {
  let caracteres = "";

  if (checkboxMaiusculas.checked) caracteres += letrasMaiusculas;
  if (checkboxNumeros.checked) caracteres += numeros;
  if (checkboxSimbolos.checked) caracteres += simbolos;

  if (caracteres.length === 0) {
    campoSenha.value = "";
    return;
  }

  let senha = "";

  for (let i = 0; i < tamanhoSenha; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indiceAleatorio];
  }

  campoSenha.value = senha;
}

[checkboxMaiusculas, checkboxNumeros, checkboxSimbolos].forEach((checkbox) => {
  checkbox.addEventListener("change", geraSenha);
});

function diminuiTamanho() {
  if (tamanhoSenha > 1) {
    tamanhoSenha--;
  }

  atualizaTamanhoNaTela();
  geraSenha();
}

function aumentaTamanho() {
  if (tamanhoSenha < 20) {
    tamanhoSenha++;
  }

  atualizaTamanhoNaTela();
  geraSenha();
}

atualizaTamanhoNaTela();
geraSenha();