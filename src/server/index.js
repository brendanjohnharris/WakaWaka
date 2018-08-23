import moment from 'moment'
const schedule = require('node-schedule')
import GithubService from './service/GithubService'
import WakatimeService from './service/WakatimeService'
const config = require('../config.json')

const wakatimeInstance = new WakatimeService(config.wakatimeApiKey)
const githubInstance = new GithubService(config.gistToken)

const syncWakaTimeToGist = function(gistId) {
  const date = moment()
    .subtract(1, 'days')
    .format('YYYY-MM-DD')
  wakatimeInstance
    .fetchSummaries(date)
    .then(response => {
      return githubInstance.updateGist(gistId, date, response)
    ***REMOVED***)
    .then(response => console.log(`${date***REMOVED***: summary data sync successed!`))
    .catch(error => console.log(`${date***REMOVED***: oops.. sync erorr. reason: ${error.data***REMOVED***`))
***REMOVED***

// 每次重跑 job 手动执行一次同步
syncWakaTimeToGist(config.syncGistId)

// 每天12点30分30秒执行该job
const job = schedule.scheduleJob('30 * * * * *', function() {
  syncWakaTimeToGist(config.syncGistId)
***REMOVED***)
