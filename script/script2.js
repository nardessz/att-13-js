function calcularSalario() {
    var nomeFuncionario = document.getElementById("employeeName").value;
    var salario = parseFloat(document.getElementById("salary").value);

    var inss = calcularINSS(salario);
    var salarioLiquido = salario - inss;

    exibirResultadoConsole(nomeFuncionario, salario, inss, salarioLiquido);
}

function calcularINSS(salario) {
    var taxaDescontoINSS = 0.08; 
    return salario * taxaDescontoINSS;
}

function exibirResultadoConsole(nomeFuncionario, salario, inss, salarioLiquido) {
    console.log("Nome do Funcionário:", nomeFuncionario);
    console.log("Salário bruto: R$", salario.toFixed(2));
    console.log("Valor do INSS: R$", inss.toFixed(2));
    console.log("Salário líquido: R$", salarioLiquido.toFixed(2));
}


