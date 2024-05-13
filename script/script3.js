function calcularDescontoSalario() {
    var nomeFuncionario = document.getElementById("nomeFuncionario").value;
    var salario = parseFloat(document.getElementById("salario").value);

    var taxaDesconto;
    var valorDesconto;

    if (salario <= 1000) {
        taxaDesconto = 0.08; // 8%
    } else if (salario <= 1500) {
        taxaDesconto = 0.085; // 8.5%
    } else {
        taxaDesconto = 0.09; // 9%
    }

    valorDesconto = salario * taxaDesconto;

    console.log("Salário em consideração: R$", salario.toFixed(2));
    console.log("Taxa de desconto:", (taxaDesconto * 100).toFixed(2) + "%");
    console.log("Valor do desconto: R$", valorDesconto.toFixed(2));
}
