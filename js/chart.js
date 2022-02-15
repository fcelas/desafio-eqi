/*
var chart = {
    async: true,
    crossDomain: true,
    url: "http://localhost:3000/simulacoes",
    method: "GET",
};

$.ajax(chart).done(function grafico(response) {
    for (let i = 0; i < response.length; i++) {
        console.log(response[i].graficoValores)
    }
}); 
*/

var simulation = {
    async: true,
    crossDomain: true,
    url: "http://localhost:3000/simulacoes",
    method: "GET",
};

$("form").submit(function(event) {
    $(".card-text").empty();
    $("#grafico").load(window.location.href + " #grafico");
    var valores = $(this).serializeArray();
    console.log(valores);
    event.preventDefault();


    if (valores[0].value === "bruto" && valores[1].value === "pre") {
        $.ajax(simulation).done(function(response) {

            const xmlhttp = new XMLHttpRequest();
            const url = "http://localhost:3000/simulacoes";
            xmlhttp.open('GET', url, true);
            xmlhttp.send()

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const datapoints = JSON.parse(this.responseText);

                    const comAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.comAporte
                        }
                    )
                    console.log(comAporte)

                    const semAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.semAporte
                        }
                    )
                    console.log(semAporte)

                    const ctx = document.getElementById('myChart').getContext('2d');
                    const myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                            datasets: [{
                                label: 'sem aporte',
                                data: semAporte[0],
                                backgroundColor: 'black'
                            }, {
                                label: 'com aporte',
                                data: comAporte[0],
                                backgroundColor: 'rgb(235, 140, 84)'
                            }]
                        },
                        options: {
                            responsive: false,
                            legend: {
                                position: 'right'
                            },
                            scales: {
                                x: {
                                    stacked: true
                                },
                                y: {
                                    stacked: true
                                }
                            }
                        }
                    });
                }
            }

        });
    } else if (valores[0].value === "bruto" && valores[1].value === "pos") {
        $.ajax(simulation).done(function(response) {

            const xmlhttp = new XMLHttpRequest();
            const url = "http://localhost:3000/simulacoes";
            xmlhttp.open('GET', url, true);
            xmlhttp.send()

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const datapoints = JSON.parse(this.responseText);

                    const comAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.comAporte
                        }
                    )
                    console.log(comAporte)

                    const semAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.semAporte
                        }
                    )
                    console.log(semAporte)

                    const ctx = document.getElementById('myChart').getContext('2d');
                    const myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                            datasets: [{
                                label: 'sem aporte',
                                data: semAporte[1],
                                backgroundColor: 'black'
                            }, {
                                label: 'com aporte',
                                data: comAporte[1],
                                backgroundColor: 'rgb(235, 140, 84)'
                            }]
                        },
                        options: {
                            responsive: false,
                            legend: {
                                position: 'right'
                            },
                            scales: {
                                x: {
                                    stacked: true
                                },
                                y: {
                                    stacked: true
                                }
                            }
                        }
                    });
                    myChart.update()
                }
            }


        });
    } else if (valores[0].value === "bruto" && valores[1].value === "fixado") {
        $.ajax(simulation).done(function(response) {

            const xmlhttp = new XMLHttpRequest();
            const url = "http://localhost:3000/simulacoes";
            xmlhttp.open('GET', url, true);
            xmlhttp.send()

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const datapoints = JSON.parse(this.responseText);

                    const comAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.comAporte
                        }
                    )
                    console.log(comAporte)

                    const semAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.semAporte
                        }
                    )
                    console.log(semAporte)

                    const ctx = document.getElementById('myChart').getContext('2d');
                    const myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                            datasets: [{
                                label: 'sem aporte',
                                data: semAporte[2],
                                backgroundColor: 'black'
                            }, {
                                label: 'com aporte',
                                data: comAporte[2],
                                backgroundColor: 'rgb(235, 140, 84)'
                            }]
                        },
                        options: {
                            responsive: false,
                            legend: {
                                position: 'right'
                            },
                            scales: {
                                x: {
                                    stacked: true
                                },
                                y: {
                                    stacked: true
                                }
                            }
                        }
                    });
                }
            }

        });
    } else if (valores[0].value === "liquido" && valores[1].value === "pre") {
        $.ajax(simulation).done(function(response) {

            const xmlhttp = new XMLHttpRequest();
            const url = "http://localhost:3000/simulacoes";
            xmlhttp.open('GET', url, true);
            xmlhttp.send()

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const datapoints = JSON.parse(this.responseText);

                    const comAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.comAporte
                        }
                    )
                    console.log(comAporte)

                    const semAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.semAporte
                        }
                    )
                    console.log(semAporte)

                    const ctx = document.getElementById('myChart').getContext('2d');
                    const myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                            datasets: [{
                                label: 'sem aporte',
                                data: semAporte[3],
                                backgroundColor: 'black'
                            }, {
                                label: 'com aporte',
                                data: comAporte[3],
                                backgroundColor: 'rgb(235, 140, 84)'
                            }]
                        },
                        options: {
                            responsive: false,
                            legend: {
                                position: 'right'
                            },
                            scales: {
                                x: {
                                    stacked: true
                                },
                                y: {
                                    stacked: true
                                }
                            }
                        }
                    });
                }
            }

        });
    } else if (valores[0].value === "liquido" && valores[1].value === "pos") {
        $.ajax(simulation).done(function(response) {

            const xmlhttp = new XMLHttpRequest();
            const url = "http://localhost:3000/simulacoes";
            xmlhttp.open('GET', url, true);
            xmlhttp.send()

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const datapoints = JSON.parse(this.responseText);

                    const comAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.comAporte
                        }
                    )
                    console.log(comAporte)

                    const semAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.semAporte
                        }
                    )
                    console.log(semAporte)

                    const ctx = document.getElementById('myChart').getContext('2d');
                    const myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                            datasets: [{
                                label: 'sem aporte',
                                data: semAporte[4],
                                backgroundColor: 'black'
                            }, {
                                label: 'com aporte',
                                data: comAporte[4],
                                backgroundColor: 'rgb(235, 140, 84)'
                            }]
                        },
                        options: {
                            responsive: false,
                            legend: {
                                position: 'right'
                            },
                            scales: {
                                x: {
                                    stacked: true
                                },
                                y: {
                                    stacked: true
                                }
                            }
                        }
                    });
                }
            }

        });
    } else if (valores[0].value === "liquido" && valores[1].value === "fixado") {
        $.ajax(simulation).done(function(response) {

            const xmlhttp = new XMLHttpRequest();
            const url = "http://localhost:3000/simulacoes";
            xmlhttp.open('GET', url, true);
            xmlhttp.send()

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const datapoints = JSON.parse(this.responseText);

                    const comAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.comAporte
                        }
                    )
                    console.log(comAporte)

                    const semAporte = datapoints.map(
                        function(index) {
                            return index.graficoValores.semAporte
                        }
                    )
                    console.log(semAporte)

                    const ctx = document.getElementById('myChart').getContext('2d');
                    const myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                            datasets: [{
                                label: 'sem aporte',
                                data: semAporte[5],
                                backgroundColor: 'black'
                            }, {
                                label: 'com aporte',
                                data: comAporte[5],
                                backgroundColor: 'rgb(235, 140, 84)'
                            }]
                        },
                        options: {
                            responsive: false,
                            legend: {
                                position: 'right'
                            },
                            scales: {
                                x: {
                                    stacked: true
                                },
                                y: {
                                    stacked: true
                                }
                            }
                        }
                    });
                }
            }

        });
    }
});