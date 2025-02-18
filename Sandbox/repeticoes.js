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



/* 2 Tabuada de um número: */
/* let num = parseFloat(prompt("Insira um numero: "));

for (let contador = 1; contador <= 10; contador++) {

    let valorCalculado = num * contador;
    let mensagem = `${num} x ${contador} = ${valorCalculado}`;
    console.log(mensagem);
};
 */

/* 
3. **Soma dos primeiros N números naturais:**
    - Peça um número `N` ao usuário.
    - Use um `while` ou `for` para somar os números de `1` a `N`. */


    let n = parseFloat(prompt("Insira um numero: "));
    let soma = 0

    for( let contador =1 ;contador <= n ; contador++){
        soma= contador  + soma 
        console.log(soma)
    }

   

