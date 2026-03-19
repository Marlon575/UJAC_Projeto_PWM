function saudar(){
    const nome = document.getElementById("campoNome").value;
    if (nome.trim() ===""){
        alert("Por favor, digite seu nome!");
        return;
    }
    document.getElementById("mensagem").textContent ="Olá," + nome + "!👋🏾";
}