***REMOVED***
const { WakaTimeClient, RANGE ***REMOVED*** = require('wakatime-client')
***REMOVED***
const { Octokit ***REMOVED*** = require('@octokit/rest')
const Axios = require('axios')

const { WAKATIME_API_KEY, GH_TOKEN, GIST_ID, SCU_KEY ***REMOVED*** = process.env
const BASE_URL = 'https://wakatime.com/api/v1'
const summariesApi = `${BASE_URL***REMOVED***/users/current/summaries`
const scuPushApi = `https://sc.ftqq.com/`

const wakatime = new WakaTimeClient(WAKATIME_API_KEY)
const octokit = new Octokit({
  auth: `token ${GH_TOKEN***REMOVED***`
***REMOVED***)

***REMOVED***
  const yesterday = dayjs()
    .subtract(1, 'day')
    .format('YYYY-MM-DD')
***REMOVED***
    const mySummary = await getMySummary(yesterday)
    await updateGist(yesterday, mySummary.data)
    await sendMessageToWechat(`[${yesterday***REMOVED***]wakatime data update successfully!`)
  ***REMOVED*** catch (error) {
    console.error(`Unable to fetch wakatime summary\n ${error***REMOVED*** `)
    await sendMessageToWechat(`[${yesterday***REMOVED***]failed to update wakatime data!`)
  ***REMOVED***
***REMOVED***

function getMySummary(date) {
  return Axios.get(summariesApi, {
    params: {
      start: date,
      end: date,
      api_key: WAKATIME_API_KEY
    ***REMOVED***
  ***REMOVED***).then(response => response.data)
***REMOVED***

/**
 * update wakatime content to gist
 * @param {****REMOVED*** date - update date
 * @param {****REMOVED*** content update content
 */
async function updateGist(date, content) {
  const file = ''
***REMOVED***
    await octokit.gists.update({
      gist_id: GIST_ID,
      files: {
        [`summaries_${date***REMOVED***.json`]: {
          content: JSON.stringify(content)
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***)
  ***REMOVED*** catch (error) {
    console.error(`Unable to update gist \n ${error***REMOVED***`)
  ***REMOVED***
***REMOVED***

/**
 * 推送消息到 Server酱
 * @param {****REMOVED*** text 标题，最初256，必需
 * @param {****REMOVED*** desp 消息内容，最长64kb，可空
 */
async function sendMessageToWechat(text: string, desp?: string) {
  if (typeof SCU_KEY !== 'undefined') {
    return Axios.get(`${scuPushApi***REMOVED***${SCU_KEY***REMOVED***.send`, {
      params: {
        text,
        desp
      ***REMOVED***
    ***REMOVED***).then(response => response.data)
  ***REMOVED***
***REMOVED***

***REMOVED***
