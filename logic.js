import { rotularColunas, preencherTabela } from "./assets/tablePresentation.js";
import { generateID } from "./assets/usefulFunctions.js";

let listaDeTodosOsItens = {
    id0:    {id: 0, name:"Longsword", bulk:"1", cost:100},
    id1:    {id: 1, name:"Leather Armor", bulk:"1", cost:200},
    id2:    {id: 2, name:"Rope", bulk:"L", cost:50},
    id3:    {id: 3, name:"Rations (1 week)", bulk:"L", cost:40}
};

let listaDeItemsDoAventureiro = [];

let tableDaLoja = document.getElementById("InventorioLoja");
let tableDoAventureiro = document.getElementById("InventorioMochila");

escreverInventorio();
rotularColunas(tableDoAventureiro);

function escreverInventorio(){
    rotularColunas (tableDaLoja);
    for (let val in listaDeTodosOsItens) {
        let itemDaVez = listaDeTodosOsItens[val];
        preencherTabela(tableDaLoja, itemDaVez);

        const presentButtonID = ("presentButton_" + itemDaVez.id);
        const buttonLoja = document.getElementById(presentButtonID);
        buttonLoja.innerText = "+";
        buttonLoja.className = "BuyButton";
        buttonLoja.addEventListener('click', function(){
            let itemComprado = generateID();
            let itemCompradoID = itemComprado;
            itemComprado = Object.assign(itemDaVez, {
                id: itemCompradoID
            });
//            itemComprado.id = itemCompradoID;
            listaDeItemsDoAventureiro.push(itemComprado);
            atualizaMochila();
            console.log(listaDeItemsDoAventureiro);       
        })
    }
}

function escreverTableDoAventureiro(){
    rotularColunas(tableDoAventureiro);

    for (let val in listaDeItemsDoAventureiro) {
        let itemDaVez = listaDeItemsDoAventureiro[val];
        preencherTabela(tableDoAventureiro, itemDaVez);

        const presentButtonID = ("presentButton_" + itemDaVez.id);
        const buttonMochila = document.getElementById(presentButtonID);
        buttonMochila.innerText = "-";
        buttonMochila.className = "SellButton";
        buttonMochila.addEventListener('click', function(){
 //           const deletedID = ("presentButton_" + listaDeTodosOsItens[i].id);
 //           const buttonMochila = document.getElementById(presentButtonID);
 //           listaDeItemsDoAventureiro.splice(listaDeItemsDoAventureiro[], 1);
 //           atualizaMochila();
        })
    }
}

function atualizaMochila () {
    tableDoAventureiro.replaceChildren();
    escreverTableDoAventureiro();
}