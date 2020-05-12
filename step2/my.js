
$(document).ready(function(){

// line
function printLineChartDemo() {

    $.ajax({
        url: "server.php",
        method: "GET",
        success : function(dati) {
            console.log('risposta del server',dati);
            var punti = dati[0].data;
            var mesi = dati[0].labels;
            console.log(mesi);
            console.log(punti);
            // ----


            var ctx = $("#line");

            var myChart = new Chart(ctx, {

            type: 'line',

            data: {
                labels: mesi,
                datasets: [{
                    label: '# VENDITE',
                    data: punti,
                    backgroundColor: [
                        'rgba(4, 51, 255, 1)',
                            'rgba(82, 40, 204, 1)',
                            'rgba(4, 51, 185, 1)',
                            'rgba(0, 146, 146, 1)',
                            'rgba(0, 249, 0, 1)',
                            'rgba(202, 250, 0, 1)',
                            'rgba(255, 251, 0, 1)',
                            'rgba(255, 199, 0, 1)',
                            'rgba(255, 147, 0, 1)',
                            'rgba(255, 80, 0, 1)',
                            'rgba(255, 38, 0, 1)',
                            'rgba(216, 34, 83, 1)'
                    ],
                    borderColor: [
                        'rgba(4, 51, 255, 1)',
                            'rgba(82, 40, 204, 1)',
                            'rgba(4, 51, 185, 1)',
                            'rgba(0, 146, 146, 1)',
                            'rgba(0, 249, 0, 1)',
                            'rgba(202, 250, 0, 1)',
                            'rgba(255, 251, 0, 1)',
                            'rgba(255, 199, 0, 1)',
                            'rgba(255, 147, 0, 1)',
                            'rgba(255, 80, 0, 1)',
                            'rgba(255, 38, 0, 1)',
                            'rgba(216, 34, 83, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
            });

        },
        error : function(){
            alert("step 1 no good");
        }

    });
    // secondo grafico///////////////////////////
    $.ajax({

        url: "server.php",
        method: "GET",
        success : function(premi) {

            var maturato = premi[1].fatturato;
            var agents = premi[1].agent;
            console.log(maturato);
            console.log(agents);
            // ----

            var ctx = $("#pie");

            var myChart = new Chart(ctx, {

            type: 'pie',

            data: {
                labels: agents,
                datasets: [{
                    label: '# FATTURE',
                    data: maturato,
                    backgroundColor: [

                            'rgba(0, 249, 0, 1)',
                            'rgba(202, 250, 0, 1)',
                            'rgba(255, 38, 0, 1)',
                            'rgba(216, 34, 83, 1)'
                    ],
                    borderColor: [

                                'rgba(0, 249, 0, 1)',
                                'rgba(202, 250, 0, 1)',
                                'rgba(255, 38, 0, 1)',
                                'rgba(216, 34, 83, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
            });

        },
        error : function(){
            alert("step 2 no good");
        }

    });



}

printLineChartDemo();


// fine document
});
