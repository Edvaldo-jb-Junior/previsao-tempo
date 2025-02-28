
let chave = "b118836cc53220aebb82eaa23ff4ba77"

function colocarNaTela(dados){
    
    document.querySelector(".cidade").innerHTML = " Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp)  + " °C "
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".qualidade").innerHTML = " Umidade " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    
}

async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric"
    ).then( resposta => resposta.json())
    
    colocarNaTela(dados)
}

function cliqueinoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

