const lstDeCompras = ["manga", "uva", "leite", "pão"];

let itemDeletar = prompt("Digite o nome do item")

console.log(`Antes do IndexOF ${lstDeCompras}`)

lstDeCompras.indexOf(itemDeletar);
console.log(`Depois do IndexOF ${lstDeCompras}`)

// const lstDeCompras = [];
// let lstDeFrutas = [], lstDeLaticinios = [], lstDeCongelados = [];
// let op, escolha, item;
// function menuDaLista(op, item, escolha, lstDeCompras, lstDeLaticinios, lstDeCongelados, lstDeFrutas) {

//     do {
//         op = parseInt(prompt("Deseja inserir itens?"));
//         if (op === 1) {
//             escolha = parseInt(prompt("Digite \n 1: Frutas \n 2: Laticinio \n 3: Congelados."));
//             switch (escolha) {
//                 case 1:
//                     item = prompt("Digite o item que deseja comprar: ");
//                     lstDeFrutas.push(item);
//                     break;
//                 case 2:
//                     item = prompt("Digite o item que deseja comprar: ");
//                     lstDeLaticinios.push(item);
//                     break;
//                 case 3:
//                     item = prompt("Digite o item que deseja comprar: ");
//                     lstDeCongelados.push(item);
//                     break;
//             }
//         }else{
//             alert("Remover:")
//             escolha = parseInt(prompt("Digite em qual lista deseja remover: \n 1: Frutas \n 2: Laticinio \n 3: Congelados.")); 
//             switch (escolha) {
//                 case 1:
//                     if (lstDeFrutas.indexOf) {
                        
//                     }
//                     item = prompt("Digite o item que deseja comprar: ");
//                     lstDeFrutas.push(item);
//                     break;
//                 case 2:
//                     item = prompt("Digite o item que deseja comprar: ");
//                     lstDeLaticinios.push(item);
//                     break;
//                 case 3:
//                     item = prompt("Digite o item que deseja comprar: ");
//                     lstDeCongelados.push(item);
//                     break;
//             }
//         }
//     } while ((op == !1) || (op == !2));

// }

// lstDeCompras.push(lstDeFrutas);
// lstDeCompras.push(lstDeLaticinios);
// lstDeCompras.push(lstDeCongelados);


// console.log(`Frutas:  ${lstDeFrutas.toString()}`);
// console.log(`Laticinios:  ${lstDeLaticinios.toString()},`)
// console.log(`Congelados:  ${lstDeCongelados.toString()}`)


