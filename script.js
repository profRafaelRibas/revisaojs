function gritar() {
    alert("AAAAAAAAAAAHHHHHHHHHH!")
}

function perguntar() {
    let nome = prompt("Qual é o seu nome?")
    alert(`Olá ${nome}`)
}

function mudar() {
    let titulo = document.getElementsByTagName("h1")
    alert(titulo[0].innerText)
    console.log(titulo[0].innerText)
    titulo[0].innerText = "Manipulei o DOM"
}

function validarFormulario() {
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const idade = document.getElementById("idade").value
    console.log(nome, email, idade)
    if (nome && email && idade > 0) {
        alert("Respostas enviadas com sucesso!")
    } else {
        alert("Complete as informações antes de enviar")
    }
}

function mostrarConteudo(menuItem) {
    const conteudo = document.getElementById("conteudo")
    switch (menuItem) {
        case 'HTML':
            conteudo.innerHTML = "<p>Conteúdo sobre HTML.</p>"
            break
        case 'CSS':
            conteudo.innerHTML = "<p>Conteúdo sobre CSS.</p>"
            break
        case 'JS':
            conteudo.innerHTML = "<p>Conteúdo sobre JS.</p>"
            break
        default:
            break
    }
}

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function verificarAdivinhacao() {
    const tentativaUsuario = parseInt(document.getElementById("tentativa").value);

    if (tentativaUsuario === numeroSecreto) {
        document.getElementById("feedback").innerText = `Parabéns! Você acertou em ${tentativas + 1} tentativas.`;
    } else {
        tentativas++;
        document.getElementById("feedback").innerText = tentativaUsuario > numeroSecreto
            ? "Tente um número menor."
            : "Tente um número maior.";
    }
}