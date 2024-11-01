require('dotenv').config()
const { WakaTimeClient, RANGE } = require('wakatime-client')
const dayjs = require('dayjs')
const { Octokit } = require('@octokit/rest')
const Axios = require('axios')

const { WAKATIME_API_KEY, GH_TOKEN, GIST_ID, SCU_KEY } = process.env
const BASE_URL = 'https://wakatime.com/api/v1'
const summariesApi = `${BASE_URL}/users/current/summaries`

const wakatime = new WakaTimeClient(WAKATIME_API_KEY)
const octokit = new Octokit({
  auth: `token ${GH_TOKEN}`
})

function getItemContent(title, content) {
  let itemContent = `#### ${title} \n`
  content.forEach(item => {
    itemContent += `* ${item.name}: ${item.text} \n`
  })
  return itemContent
}

function getMessageContent(date, summary) {
  if (summary.length > 0) {
    const { projects, grand_total, languages, categories, editors } = summary[0]

    return `## Wakatime Daily Report\nTotal: ${grand_total.text}\n${getItemContent(
      'Projects',
      projects
    )}\n${getItemContent('Languages', languages)}\n${getItemContent(
      'Editors',
      editors
    )}\n${getItemContent('Categories', categories)}\n`
  }
}

function getMySummary(date) {
  return Axios.get(summariesApi, {
    params: {
      start: date,
      end: date,
      api_key: WAKATIME_API_KEY
    }
  }).then(response => response.data)
}

async function updateGist(date, content) {
  const file = ''
  try {
    await octokit.gists.update({
      gist_id: GIST_ID,
      files: {
        [`summaries_${date}.json`]: {
          content: JSON.stringify(content)
        }
      }
    })
  } catch (error) {
    console.error(`Unable to update gist \n ${error}`)
  }
}

const fetchSummaryWithRetry = async times => {
  const yesterday = dayjs()
    .subtract(9, 'hour')
    .format('YYYY-MM-DD')
  try {
    const mySummary = await getMySummary(yesterday)
    await updateGist(yesterday, mySummary.data)
  } catch (error) {
    if (times === 1) {
      console.error(`Unable to fetch wakatime summary\n ${error} `)
    }
    console.log(`retry fetch summary data: ${times - 1} time`)
    fetchSummaryWithRetry(times - 1)
  }
}

async function main() {
  fetchSummaryWithRetry(3)
}

main()
