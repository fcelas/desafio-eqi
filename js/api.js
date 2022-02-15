var settings = {
    async: true,
    crossDomain: true,
    url: "http://localhost:3000/indicadores",
    method: "GET",
};

$.ajax(settings).done(function indicadores(response) {
    console.log(response);

    var cdi = response[0].valor;
    $("#valorCdi").append(cdi + "%");

    var ipca = response[1].valor;
    $("#valorIpca").append(ipca + "%");
});

var simulation = {
    async: true,
    crossDomain: true,
    url: "http://localhost:3000/simulacoes",
    method: "GET",
};



$("form").submit(function(event) {
    $(".card-text").empty();
    var valores = $(this).serializeArray();
    console.log(valores);
    event.preventDefault();

    if (valores[0].value === "bruto" && valores[1].value === "pre") {
        $.ajax(simulation).done(function(response) {
            var finalBruto = response[0].valorFinalBruto;
            $("#finalBruto").append("R$" + finalBruto);

            var ir = response[0].aliquotaIR;
            $("#aliquotaIR").append(ir + "%");

            var valorIR = response[0].valorPagoIR;
            $("#valorIR").append("R$" + valorIR);

            var totalInvestido = response[0].valorTotalInvestido;
            $("#valorInvestido").append("R$" + totalInvestido);

            var finalLiquido = response[0].valorFinalLiquido;
            $("#finalLiquido").append("R$" + finalLiquido);

            var ganho = response[0].ganhoLiquido;
            $("#ganhoLiquido").append("R$" + ganho);



        });
    } else if (valores[0].value === "bruto" && valores[1].value === "pos") {
        $.ajax(simulation).done(function(response) {
            var finalBruto = response[1].valorFinalBruto;
            $("#finalBruto").append("R$" + finalBruto);

            var ir = response[1].aliquotaIR;
            $("#aliquotaIR").append(ir + "%");

            var valorIR = response[1].valorPagoIR;
            $("#valorIR").append("R$" + valorIR);

            var totalInvestido = response[1].valorTotalInvestido;
            $("#valorInvestido").append("R$" + totalInvestido);

            var finalLiquido = response[1].valorFinalLiquido;
            $("#finalLiquido").append("R$" + finalLiquido);

            var ganho = response[1].ganhoLiquido;
            $("#ganhoLiquido").append("R$" + ganho);
        });
    } else if (valores[0].value === "bruto" && valores[1].value === "fixado") {
        $.ajax(simulation).done(function(response) {
            var finalBruto = response[2].valorFinalBruto;
            $("#finalBruto").append("R$" + finalBruto);

            var ir = response[2].aliquotaIR;
            $("#aliquotaIR").append(ir + "%");

            var valorIR = response[2].valorPagoIR;
            $("#valorIR").append("R$" + valorIR);

            var totalInvestido = response[2].valorTotalInvestido;
            $("#valorInvestido").append("R$" + totalInvestido);

            var finalLiquido = response[2].valorFinalLiquido;
            $("#finalLiquido").append("R$" + finalLiquido);

            var ganho = response[2].ganhoLiquido;
            $("#ganhoLiquido").append("R$" + ganho);
        });
    } else if (valores[0].value === "liquido" && valores[1].value === "pre") {
        $.ajax(simulation).done(function(response) {
            var finalBruto = response[3].valorFinalBruto;
            $("#finalBruto").append("R$" + finalBruto);

            var ir = response[3].aliquotaIR;
            $("#aliquotaIR").append(ir + "%");

            var valorIR = response[3].valorPagoIR;
            $("#valorIR").append("R$" + valorIR);

            var totalInvestido = response[3].valorTotalInvestido;
            $("#valorInvestido").append("R$" + totalInvestido);

            var finalLiquido = response[3].valorFinalLiquido;
            $("#finalLiquido").append("R$" + finalLiquido);

            var ganho = response[3].ganhoLiquido;
            $("#ganhoLiquido").append("R$" + ganho);
        });
    } else if (valores[0].value === "liquido" && valores[1].value === "pos") {
        $.ajax(simulation).done(function(response) {
            var finalBruto = response[4].valorFinalBruto;
            $("#finalBruto").append("R$" + finalBruto);

            var ir = response[4].aliquotaIR;
            $("#aliquotaIR").append(ir + "%");

            var valorIR = response[4].valorPagoIR;
            $("#valorIR").append("R$" + valorIR);

            var totalInvestido = response[4].valorTotalInvestido;
            $("#valorInvestido").append("R$" + totalInvestido);

            var finalLiquido = response[4].valorFinalLiquido;
            $("#finalLiquido").append("R$" + finalLiquido);

            var ganho = response[4].ganhoLiquido;
            $("#ganhoLiquido").append("R$" + ganho);
        });
    } else if (valores[0].value === "liquido" && valores[1].value === "fixado") {
        $.ajax(simulation).done(function(response) {
            var finalBruto = response[5].valorFinalBruto;
            $("#finalBruto").append("R$" + finalBruto);

            var ir = response[5].aliquotaIR;
            $("#aliquotaIR").append(ir + "%");

            var valorIR = response[5].valorPagoIR;
            $("#valorIR").append("R$" + valorIR);

            var totalInvestido = response[5].valorTotalInvestido;
            $("#valorInvestido").append("R$" + totalInvestido);

            var finalLiquido = response[5].valorFinalLiquido;
            $("#finalLiquido").append("R$" + finalLiquido);

            var ganho = response[5].ganhoLiquido;
            $("#ganhoLiquido").append("R$" + ganho);
        });
    }
});