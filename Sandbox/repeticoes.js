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

}

