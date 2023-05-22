let inventorio = ['Sword','Rope','Clothes','Food'];
let aventureiro = [];

let listaLoja = document.getElementById("InventorioLoja");
let listaAventureiro = document.getElementById("InventorioMochila");

escreverInventorio();

function escreverInventorio(){
    inventorio.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        li.id = ("itemDaLoja_" + item);
        listaLoja.appendChild(li);

        let buttonLoja = document.createElement("button");    
        buttonLoja.innerText = "+";
        buttonLoja.id = ("buyButton_" + item);
        buttonLoja.className = "BuyButton";
        buttonLoja.addEventListener('click', function(){
            aventureiro.splice(aventureiro.length, 0, item);
            atualizaMochila();
        });
        li.appendChild(buttonLoja); 
    })
}

function escreverListaAventureiro(){
    let SellButtonCounter = 0;
    aventureiro.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        li.id = ("listaDoAventureiro_" + item);
        listaAventureiro.appendChild(li);

        let buttonMochila = document.createElement("button");
        buttonMochila.innerText = "-";
        buttonMochila.id = (SellButtonCounter);
        buttonMochila.className = "SellButton";
        buttonMochila.addEventListener('click', function(){
            aventureiro.splice(buttonMochila.id,1);
            atualizaMochila();
            SellButtonCounter--;
        })
        li.appendChild(buttonMochila);
        SellButtonCounter++;
    })
}

function atualizaMochila () {
    listaAventureiro.replaceChildren();
    escreverListaAventureiro();
}

//teste para verificar branch novo uwu