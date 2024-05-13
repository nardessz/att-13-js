function calcular() {
 
    var variavel1 = parseInt(document.getElementById("var1").value);
    var variavel2 = parseInt(document.getElementById("var2").value);

    var diferenca = variavel1 - variavel2;
    console.log("Diferença entre as duas variáveis:", diferenca);

    var resultado = (2 * variavel1) + (3 * variavel2);
    console.log("O dobro da primeira variável mais o triplo da segunda variável:", resultado);

    var multiplicacao = variavel1 * variavel2;
    console.log("Multiplicação das duas variáveis:", multiplicacao);

    var maior;
    var menor;

    if (variavel1 > variavel2) {
        maior = variavel1;
        menor = variavel2;
    } else if (variavel2 > variavel1) {
        maior = variavel2;
        menor = variavel1;
    } else {
        console.log("As duas variáveis têm o mesmo valor:", variavel1);
        return; 
    }

    console.log("Maior valor:", maior);
    console.log("Menor valor:", menor);
}