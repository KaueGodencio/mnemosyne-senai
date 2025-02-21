/* Quando usamos o for consguimos definir um valor, na no while eu nao consigo limitar */



/* for (let contagem = 1; contagem <= 10; contagem++) {
     alert(`Contagem: ${contagem}`)   
     console.log(`Contagem: ${contagem}`) ;

  } */



/* 2. **Tabuada de um número:**
    - Peça um número ao usuário.
    - Exiba a tabuada desse número de 1 a 10 usando um `for`. */



/* let contador = 1;
while (contador<= 5){
    console.log("Contagem:" + contador);
    contador++;
} */
/* 
3. **Soma dos primeiros N números naturais:**
    - Peça um número `N` ao usuário.
    - Use um `while` ou `for` para somar os números de `1` a `N`. */


/*   let n = parseFloat(prompt("Insira um numero: "));
  let soma = 0

  for( let contador =1 ;contador <= n ; contador++){
      soma= contador  + soma 
      console.log(soma)
  }
*/

// WHILE
// EXERCICIO 2
/* let numeroAleatorio = Math.floor(Math.random() * 100);

let chute = null;

while (chute != numeroAleatorio) {

    chute = parseInt(prompt("Chute um número:"));

    if (chute != numeroAleatorio) {

        if (chute > numeroAleatorio) {
    
            alert("Chutou alto.");
    
        } else {
    
            alert("Chutou baixo.");
    
        }

    }

}

alert("Você acertou!");
 */

/* 
3. **Contagem regressiva:**
    - Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`
 */

/* Enquanto for verdadeiro */

function exercicioRep01() {

    for (let contador = 1; contador <= 10; contador++) {
        console.log("contagem :", contador);
    }

    let divDeLogs = document.querySelector(".logs"); // pega o elemento do HTML

    let paragrafo = document.createElement('p')

    paragrafo.innerHTML = "Exercicio 01 de repetiçao"

    divDeLogs.appendChild(paragrafo);


};

function exercicioRep02() {
    /* 2 Tabuada de um número: */
    let num = parseFloat(prompt("Insira um numero: "));

    for (let contador = 1; contador <= 10; contador++) {



        let valorCalculado = num * contador;
        let mensagem = `${num} x ${contador} = ${valorCalculado}`;

        console.log(mensagem);
    };

    alert("Os dados sao mostrados no console");

}





// 1️⃣ Filtrar números maiores que 10

/* const numeros = [5, 8, 12, 15, 3, 20, 7];
const maioresQueDez = numeros.filter(numero => numero > 10);
console.log(maioresQueDez);  */// Deve retornar [12, 15, 20]

//2️⃣ Filtrar nomes que começam com a letra 'A'

/* const nomes = ["Ana", "João", "Amanda", "Carlos", "Arthur", "Beatriz"];
const nomesComA = nomes.filter(nome => nome.startsWith("C"));
console.log(nomesComA); */ // Deve retornar ["Ana", "Amanda", "Arthur"]


//1️⃣ Buscar o nome “Amanda”

/* const BuscaNomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
const amanda = BuscaNomes.find(nome => nome == "Amanda");

console.log(amanda);
const funcaoExemplo = pam1 => par1 == "Amanda" */

// Deve retornar "Amanda"


//2️⃣ Buscar o usuário que o ID é igual a 2


/* const listaDeUsuarios = [
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bruno" },
    { id: 3, nome: "Carla" }
];

const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);

console.log(usuarioEncontrado); */
// Deve retornar { id: 2, nome: "Bruno" }



// 4️⃣ Buscar o produto de nome “Fone de ouvido”

/* const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 40 },
    { nome: "Fone de ouvido", preco: 80 },
    { nome: "Caderno", preco: 30 }

];



const produtoBuscado = produtoBuscado.find(produtos => produtos.nome == "Fone de ouvido");
console.log(produtoBarato);  */

// Deve retornar { nome: "Fone de ouvido", preco: 80 }


//1. Pede o nome do vendedor.
//2. Pergunta se ele é um vendedor nível I, II ou III.
//3. Pergunta quanto o vendedor vendeu.

// 1. Para os funcionários nível I:
// 1. Se o vendedor vendeu mais de R$20.000,00 a bonificação será de 20 %.
// 2. Se o vendedor vendeu mais de R$50.000,00 a bonificação será de 35 %.
// 3. Se o vendedor vendeu mais de R$80.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR }, nível I foi promovido ao nível II”.
// 4. Se o vendedor vendeu menos de R$5.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR }, nível I, está em risco de demissão.”

/* 2. Para os funcionários nível II:
1. Se o vendedor vendeu mais de R$90.000,00 a bonificação será de 25 %.
    2. Se o vendedor vendeu mais de R$120.000,00 a bonificação será de 40 %.
    3. Se o vendedor vendeu mais de R$200.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR }, nível II, foi promovido ao nível III”.
4. Se o vendedor vendeu menos de R$50.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR }, nível II, está em risco de virar nível I.”
 */

/* 3. Para os funcionários nível III:
    1. Se o vendedor vendeu mais de R$210.000,00 a bonificação será de 30%.
    2. Se o vendedor vendeu mais de R$250.000,00 a bonificação será de 45%.
    3. Se o vendedor vendeu mais de R$500.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR}, nível III, virou o dono da firma!”.
    4. Se o vendedor vendeu menos de R$100.000,00 mostre um alerta “O vendedor ${NOME DO VENDEDOR}, nível III, está em risco de virar nível II.”
 */

/* 
    ## Observação

Quando o funcionário tiver uma bonificação, você deverá exibir na tela um alerta com a seguinte mensagem:

> “O vendedor ${NOME DO VENDEDOR }, nível ${NÍVEL DO VENDEDOR, deverá receber um bonificação de ${VALOR DO AUMENTO }.” */




/* const listaDeUsuarios = [
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bruno" },
    { id: 3, nome: "Carla" }
];

const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);

console.log(usuarioEncontrado); */
/* 
let nomeUsuario = (prompt("Ola vendedor, informe nome:"));
let nivelVendedor = (prompt("qual seu nivel: nivel 1, 2 ou 3"));
let valorVendido = (prompt("Quanto vendeu :"));
 */
const vendedor = {
    id: 1,
    nome: prompt("Olá vendedor, informe seu nome:"),
    nivelVendedor: parseFloat(prompt("Olá vendedor, informe seu nível:")),
    valorVenda: parseFloat(prompt("Informe o valor da sua venda:"))
};

let bonificacao1 = vendedor.valorVenda * 0.20;
let bonificacao2 = vendedor.valorVenda * 0.35;
let bonificacao3 = vendedor.valorVenda * 0.45;

let valorComissao = bonificacao1 + vendedor.valorVenda;
let valorComissao1 = bonificacao1 + vendedor.valorVenda;
let valorComissao2 = bonificacao2 + vendedor.valorVenda;
let valorComissao3 = bonificacao3 + vendedor.valorVenda;

// Acesse corretamente a propriedade nivelVendedor dentro do objeto vendedor
if (vendedor.nivelVendedor === 1 && vendedor.valorVenda > 50000) {
    // Para vendas acima de 50.000, a bonificação será de 35%
    console.log("Nível 1 e vendeu o valor de: " + vendedor.valorVenda + " e terá bonificação de R$ " + bonificacao2 + " e deve receber R$ " + valorComissao2);

} else if(vendedor.nivelVendedor === 1 && vendedor.valorVenda > 20000) {

    // Para vendas acima de 20.000, a bonificação será de 20%
    alert("Nível 1 e vendeu o valor de: " + vendedor.valorVenda + " e terá bonificação de R$ " + bonificacao2 + " e deve receber R$ " + valorComissao);

} else if (vendedor.nivelVendedor === 2 && vendedor.valorVenda > 80000) {
    // Para vendas acima de 80.000, a bonificação será de 45%
    alert("O vendedor" + vendedor.nome + " , nível 1 foi promovido ao nivel 2 ");



} else {
    console.log("O vendedor não atingiu as condições de bonificação.");
}