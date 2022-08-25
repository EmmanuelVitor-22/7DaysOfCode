const lstDeCompras = [];
let lstDeFrutas = [], lstDeLaticinios = [], lstDeCongelados = [];
let op, escolha, item;
function menuDaLista(op, item, escolha, lstDeCompras, lstDeLaticinios, lstDeCongelados, lstDeFrutas) {

    do {
        op = confirm("Deseja inserir itens?")
        if (op === true) {
            escolha = parseInt(prompt("Digite \n 1: Frutas \n 2: Laticinio \n 3: Congelados."));
            switch (escolha) {
                case 1:
                    item = prompt("Digite o item que deseja comprar: ");
                    lstDeFrutas.push(item);
                    break;
                case 2:
                    item = prompt("Digite o item que deseja comprar: ");
                    lstDeLaticinios.push(item);
                    break;
                case 3:
                    item = prompt("Digite o item que deseja comprar: ");
                    lstDeCongelados.push(item);
                    break;
            }
        }
    } while (op == true);

}

lstDeCompras.push(lstDeFrutas);
lstDeCompras.push(lstDeLaticinios);
lstDeCompras.push(lstDeCongelados);


console.log(`Frutas:  ${lstDeFrutas.toString()}`);
console.log(`Laticinios:  ${lstDeLaticinios.toString()},`)
console.log(`Congelados:  ${lstDeCongelados.toString()}`)


