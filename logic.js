import { rotularColunas, preencherTabela } from "./assets/tablePresentation.js";
import { GeneralItem } from "./assets/classesManagement.js";
import { listaDeTodosOsItens } from "./assets/listManagement.js";

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
            let itemComprado = new GeneralItem(itemDaVez.type, itemDaVez.name, itemDaVez.bulk, itemDaVez.cost)
            listaDeItemsDoAventureiro.push(itemComprado);
            atualizaMochila();    
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
            let venderItem = this.id.slice(14);
            let position = listaDeItemsDoAventureiro.findIndex(itemAlvo => itemAlvo.id === venderItem)
            listaDeItemsDoAventureiro.splice(position, 1)
            atualizaMochila();
        })
    }
}

function atualizaMochila () {
    tableDoAventureiro.replaceChildren();
    escreverTableDoAventureiro();
}