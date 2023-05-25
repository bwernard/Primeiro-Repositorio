function rotularColunas (nomeDaLista) {
    let linhaDeRotulos = document.createElement("tr");
        let rotuloNome = document.createElement("th");
            rotuloNome.innerText = "Nome";
        nomeDaLista.appendChild(rotuloNome);

        let rotuloBulk = document.createElement("th");
            rotuloBulk.className = "bulkClass";
            rotuloBulk.innerText = "Bulk";
        nomeDaLista.appendChild(rotuloBulk);

        let rotuloCusto = document.createElement("th");
            rotuloCusto.innerText = "Custo";
        nomeDaLista.appendChild(rotuloCusto);
    nomeDaLista.appendChild(linhaDeRotulos);
}

function preencherTabela (nomeDaLista, itemDaVez) {
    let linhaDaVez = document.createElement("tr");
        let nomeDoItem = document.createElement("td");
            nomeDoItem.innerText = itemDaVez.name;
            nomeDoItem.id = ("itemNome_id" + itemDaVez.id);
        nomeDaLista.appendChild(nomeDoItem);

        let bulkDoItem = document.createElement("td");
            bulkDoItem.innerText = itemDaVez.bulk;
            bulkDoItem.id = ("itemBulk_id" + itemDaVez.id);
        nomeDaLista.appendChild(bulkDoItem);

        let custoDoItem = document.createElement("td");
            custoDoItem.innerText = itemDaVez.cost;
            custoDoItem.id = ("itemCost_id" + itemDaVez.id);
        nomeDaLista.appendChild(custoDoItem);    

        let btnDaVez = document.createElement("button");    
            btnDaVez.id = ("presentButton_" + itemDaVez.id);
        nomeDaLista.appendChild(btnDaVez);
    nomeDaLista.appendChild(linhaDaVez);
}

export { rotularColunas, preencherTabela };