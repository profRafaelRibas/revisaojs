function gritar() {
    alert("AAAAAAAAAAAHHHHHHHHHH!")
}

function perguntar() {
    let nome = prompt("Qual é o seu nome?")
    alert(`Olá ${nome}`)
}

function mudar(){
    let titulo = document.getElementsByTagName("h1")
    alert(titulo[0].innerText)
    console.log(titulo[0].innerText)
    titulo[0].innerText = "Manipulei o DOM"
}
