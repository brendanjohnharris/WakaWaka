
let smooth = false
let propagate = false

async function main() {

    dates = await retrieveDateRange()
    data = await formatDaysData(dates)
    plotdata = await formatPlotData(data)



    const config = {
        type: 'line',
        data: plotdata,
        options: {
            stepped: 'middle',
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
                    }
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
                }
            },
            interaction: {
                intersect: false
            },
            elements: {
                line: {
                    tension: 0.1,
                    fill: 'stack'
                }
            }
        }
    }

    new Chart(document.getElementById('waka'), config)

}

main()