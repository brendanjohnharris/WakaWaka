const GH_USER = 'brendanjohnharris'
const GIST_ID = '154db66816e5fc616b1ff180a01c3dd2'

// Have these user-settable at some stage
const category = 'projects'
const variable = 'total_seconds'
const default_start_date = dayjs().subtract(14, 'day')
const default_end_date = dayjs().subtract(0, 'day')
const min_seconds = 1200
const min_percent = 1

dayjs.extend(window.dayjs_plugin_duration);

async function dateRange(start, end) {
    start = await dayjs(start)
    end = await dayjs(end)
    return await Array.from({ length: end.diff(start, 'day') + 1 }, (_, i) => start.add(i, 'day'))
}

async function formatURL(date) {
    date = await date.toISOString().slice(0, 10)
    return await `https://gist.githubusercontent.com/${GH_USER}/${GIST_ID}/raw/summaries_${date}.json`
}

async function getFileContents(date) {
    url = await formatURL(date)
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return await response.text()
    } catch (error) {
        console.error(`Unable to retrieve gist for \n ${error}`)
        return null
    }
}

async function getFileData(date) {
    contents = await getFileContents(date)
    if (contents === null) {
        return null
    }
    return await JSON.parse(contents)[0]
}

const zip = (d, a, b) => a.map((k, i) => [d, k, b[i]])

async function formatDayData(date) {
    data = await getFileData(date)
    if (data === null) {
        return null
    }
    subdata = await data[category]
    subdata = subdata.filter(item => item['total_seconds'] > min_seconds)
    subdata = subdata.filter(item => item['percent'] > min_percent)
    return await zip(
        date,
        subdata.map(item => item['name']),
        subdata.map(item => item[variable])
    )
}

async function formatDaysData(dates) {
    data = await Promise.all(dates.map(date => formatDayData(date)))
    data = await data.flat()
    return data.filter(item => item !== null)
}

function getValue(data, date, label) {
    out = data.find(item => item[0].isSame(date, 'day') && item[1] === label)
    if (out === undefined) {
        return 0
    }
    return out[2]
}

async function _formatPlotData(data) {
    labels = data.map(item => item[1])
    unilabels = [...new Set(labels)]
    xs = data.map(item => item[0])
    ys = data.map(item => item[2])

    firstx = dayjs(Math.min(...xs))
    lastx = dayjs(Math.max(...xs))
    finalxs = Array.from({ length: lastx.diff(firstx, 'day') + 1 }, (_, i) => firstx.add(i, 'day'))
    finalxs = finalxs.map(date => date.format('YYYY-MM-DD'))
    finalys = unilabels.map(label => finalxs.map(date => getValue(data, date, label)))
    ////finalxs = unilabels.map(label => finalxs)
    //sumorder = finalys.map(x => x.reduce((a, b) => a + b, 0))

    //indices = Array.from({ length: sumorder.length }, (v, i) => i)
    //indices.sort((a, b) => sumorder[b] - sumorder[a])

    //unilabels = indices.map(i => unilabels[i])
    //finalys = indices.map(i => finalys[i])
    //finalxs = indices.map(i => finalxs[i])
    console.log(unilabels)
    console.log(finalxs)
    console.log(finalys)
    return [finalxs, finalys, unilabels]
}


async function formatPlotData(data) {
    [finalxs, finalys, unilabels] = await _formatPlotData(data)
    data = unilabels.map((label, i) => ({
        label: label,
        data: finalys[i]
    }))

    out = {
        labels: finalxs,
        datasets: data
    }
    return out
}

function formatSeconds(val, index) {
    console.log(val)
    return dayjs.duration(val, 'seconds').format('H[h] m[m]');
}

