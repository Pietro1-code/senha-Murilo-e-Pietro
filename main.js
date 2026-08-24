const campoSenha =
    document.querySelector("#campo-senha");

const numeroSenha =
    document.querySelector("#numero-senha");

const letrasMaiusculas =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const simbolos = 
    "#$%&*+-@?!";

let tamanhoSenha = 8;
geraSenha();

function geraSenha() {

    let senha = "";
      if(checkbox.[0].checked) {

         senha += letrasMaiusculas[
           Match.Floor(match.random(letrasMaiusculas.leight))

    for (let i = 0; i < tamanhoSenha; i++) {

       let numeroAleatorio =
           Math.random() * letrasMaiusculas.length;

       numeroAleatorio =
           Math.floor(numeroAleatorio);

senha =
   senha +
   letrasMaiusculas[numeroAleatorio];
   
}

   campoSenha.value = senha;
}

function diminuiTamanho() {
   if (tamanhoSenha > 1) {
senha = senha +
   simbolos[letrasMaiusculas & numeroAleatorio]

      tamanhoSenha--;
}
   numeroSenha.textContent = tamanhoSenha;
  geraSenha();
}

function aumentaTamanho() {
if (tamanhoSenha < 20) {
    tamanhoSenha++;
}
  numeroSenha.textContent = tamanhoSenha;
  geraSenha();
}
