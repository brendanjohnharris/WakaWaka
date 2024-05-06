
let smooth = false
let propagate = false

async function main() {

    dates = await retrieveDateRange()
    data = await formatDaysData(dates)
    plotdata = await formatPlotData(data)



    const config = {
        type: 'bar',
        data: plotdata,
        options: {
            categoryPercentage: 1,
            barPercentage: 1,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        parser: 'yyyy-MM-dd',
                        unit: 'day',
                        minUnit: 'day',
                        displayFormats: {
                            day: 'E dd/MM/yyyy'
                        }
                    },
                    stacked: true,
                },
                y: {
                    ticks: {
                        callback: formatSeconds
                    },
                    stacked: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += formatSeconds(context.parsed.y, 0);
                            }
                            return label;
                        }
                    }
                },
                filler: {
                    propagate: false
                },
                'samples-filler-analyser': {
                    target: 'chart-analyser'
                },
                legend: {
                    display: true,
                }
            },
            interaction: {
                intersect: false
            },
            elements: {
                line: {
                    stepped: 'middle',
                    // tension: 0.1,
                    fill: 'origin'
                },
                bar: {
                    borderWidth: 0,
                    borderSkipped: false,
                    hoverBorderWidth: 3,
                }
            }
        }
    }

    new Chart(document.getElementById('waka'), config)

}

main()