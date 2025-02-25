
let chave = "b118836cc53220aebb82eaa23ff4ba77"

async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + cidade + "&appid=" + chave + "&lang=pt-br" + "&init"
    ).then( resposta => resposta.json())
    console.log(dados)
}

function cliqueinoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

