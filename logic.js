// let inventorio = ['Sword','Rope','Clothes','Food'];

const weapon1 = {id: 1, nome:"Longsword", bulk:"1", cost:100};
const armor1 = {id: 2, nome:"Leather Armor", bulk:"1", cost:200};
const item1 = {id: 3, nome:"Rope", bulk:"L", cost:50};
const consumable1 = {id: 4, nome:"Rations (1 week)", bulk:"L", cost:40};
let inventorio = [weapon1, armor1, item1, consumable1]; 

let aventureiro = [];

let listaLoja = document.getElementById("InventorioLoja");
let listaAventureiro = document.getElementById("InventorioMochila");

escreverInventorio();

function escreverInventorio(){
    let tr1 = document.createElement("tr");
        let td1 = document.createElement("td");
            td1.innerText = "Nome";
        listaLoja.appendChild(td1);

        let td2 = document.createElement("td");
            td2.innerText = "Bulk";
        listaLoja.appendChild(td2);

        let td3 = document.createElement("td");
            td3.innerText = "Custo";
        listaLoja.appendChild(td3);
    listaLoja.appendChild(tr1);

    inventorio.forEach((item)=>{
        let tr1 = document.createElement("tr");

            let td1 = document.createElement("td");
                td1.innerText = item.nome;
                td1.id = ("itemDaLoja_" + item.id);
            listaLoja.appendChild(td1);

            let td2 = document.createElement("td");
                td2.innerText = item.bulk;
                td2.id = ("itemDaLoja_" + item.id);
            listaLoja.appendChild(td2);

            let td3 = document.createElement("td");
                td3.innerText = item.cost;
                td3.id = ("itemDaLoja_" + item.id);
            listaLoja.appendChild(td3);

            let buttonLoja = document.createElement("button");    
                buttonLoja.innerText = "+";
                buttonLoja.id = ("buyButton_" + item.nome);
                buttonLoja.className = "BuyButton";
                
                buttonLoja.addEventListener('click', function(){
                    aventureiro.splice(aventureiro.length, 0, item);
                    atualizaMochila();
                    console.log(aventureiro);
                });
            listaLoja.appendChild(buttonLoja); 
        listaLoja.appendChild(tr1);
    })
}

function escreverListaAventureiro(){
    let SellButtonCounter = 0;

    let tr1 = document.createElement("tr");
        let td1 = document.createElement("td");
            td1.innerText = "Nome";
        listaAventureiro.appendChild(td1);

        let td2 = document.createElement("td");
            td2.innerText = "Bulk";
        listaAventureiro.appendChild(td2);

        let td3 = document.createElement("td");
            td3.innerText = "Custo";
        listaAventureiro.appendChild(td3);
    listaAventureiro.appendChild(tr1);

    aventureiro.forEach((item)=>{
        let tr1 = document.createElement("tr");

            let td1 = document.createElement("td");
                td1.innerText = item.nome;
                td1.id = ("itemDaLoja_" + item.id);
            listaAventureiro.appendChild(td1);

            let td2 = document.createElement("td");
                td2.innerText = item.bulk;
                td2.id = ("itemDaLoja_" + item.id);
            listaAventureiro.appendChild(td2);

            let td3 = document.createElement("td");
                td3.innerText = item.cost;
                td3.id = ("itemDaLoja_" + item.id);
            listaAventureiro.appendChild(td3);

            let buttonMochila = document.createElement("button");
                buttonMochila.innerText = "-";
                buttonMochila.id = (SellButtonCounter);
                buttonMochila.className = "SellButton";

                buttonMochila.addEventListener('click', function(){
                    aventureiro.splice(buttonMochila.id,1);
                    atualizaMochila();
                    SellButtonCounter--;
                })
            listaAventureiro.appendChild(buttonMochila);

            SellButtonCounter++;
        listaAventureiro.appendChild(tr1);
    })
}

function atualizaMochila () {
    listaAventureiro.replaceChildren();
    escreverListaAventureiro();
}