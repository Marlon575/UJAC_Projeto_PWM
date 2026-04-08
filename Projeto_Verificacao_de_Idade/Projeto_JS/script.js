const botao    = document.getElementById("botaoVerificar");
const campo    = document.getElementById("campoIdade");
const resultado = document.getElementById("resultado");

function verificarIdade() {
    const valorDigitado = campo.value.trim();
    const idade = Number(valorDigitado);
    if (valorDigitado === "" || isNaN(idade)) {
    alert("Por favor, insira um valor numérico válido.");
    return;
}
if (idade >= 18) {
    resultado.textContent = "Maior de idade.";
    resultado.className = "resultado maior";
} else {
    resultado.textContent = "Menor de idade.";
    resultado.className = "resultado menor";
}

}
botao.addEventListener("click", verificarIdade);