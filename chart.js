const data = {
    labels: [1, 2, 3],
    datasets: [
        {
            label: 'D2',
            data: [1, 1, 3]
        },
        {
            label: 'D3',
            data: [1, 1, 3]
        },
        {
            label: 'D4',
            data: [1, 1, 3]
        }
    ]
}

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                stacked: true
            }
        },
        plugins: {
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
                // tension: 0.4,
                fill: 'stack'
            }
        }
    }
}

let smooth = false
let propagate = false

new Chart(document.getElementById('waka'), config)