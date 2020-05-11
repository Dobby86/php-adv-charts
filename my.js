
$(document).ready(function(){

// line
function printLineChartDemo() {

    $.ajax({
        url: "server.php",
        method: "GET",
        success : function(dati) {

            var punti = dati.data;
            var mesi = dati.labels;
            console.log(mesi);
            console.log(punti);
            // ----

            console.log("ho i dati");

            console.log("uso i dati");

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
            alert("alert!!!");
        }

    });



}

printLineChartDemo();


// fine document
});
