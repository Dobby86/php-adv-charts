
$(document).ready(function(){

// line
function printLineChartDemo() {

    $.ajax({
        url: "server.php",
        method: "GET",
        success : function(pluto) {

            var punti = pluto.data;
            var mesi = pluto.labels;
            console.log(mesi);
            console.log(punti);

        }

    });

    var ctx = $("#line");

    var myChart = new Chart(ctx, {

    type: 'line',

    data: {
        labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
        datasets: [{
            label: '# VENDITE',
            data: [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322],

            backgroundColor: [
                'rgba(150, 33, 146, 1)',
                    'rgba(82, 40, 204, 1)',
                    'rgba(4, 51, 255, 1)',
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
                'rgba(150, 33, 146, 1)',
                    'rgba(82, 40, 204, 1)',
                    'rgba(4, 51, 255, 1)',
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
            borderWidth: 3
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

}

printLineChartDemo();


// fine document
});
