import * as moment from 'moment'
const schedule = require('node-schedule')
import GithubService from './service/GithubService'
import WakatimeService from './service/WakatimeService'
import ServerPushService from './service/ServerPushService'
const config = require('../config.json')

const wakatimeInstance = new WakatimeService(config.wakatimeApiKey)
const githubInstance = new GithubService(config.gistToken)
const serverPushInstance = new ServerPushService(config.SCUKey)

const title = ''
const syncWakaTimeToGist = function(gistId: string) {
  const date = moment()
    .subtract(1, 'days')
    .format('YYYY-MM-DD')
  wakatimeInstance
    .fetchSummaries(date)
    .then(response => {
      return githubInstance.updateGist(gistId, date, response)
    ***REMOVED***)
    .then(response => {
      console.log(`${date***REMOVED***的数据同步成功！`)
      serverPushInstance.sendMessageToWechat(`Wakatime-${date***REMOVED***的数据同步成功啦`)
    ***REMOVED***)
    .catch(error => {
      if (error.response) {
        const { data ***REMOVED*** = error.response
        console.log(`${date***REMOVED***: 糟糕....请求出了点小差错。错误原因：${JSON.stringify(data)***REMOVED***`)
        serverPushInstance.sendMessageToWechat(
          `【Wakatime Sync】${date***REMOVED***的数据同步失败`,
          `错误原因：${JSON.stringify(data)***REMOVED***`
      ***REMOVED***
      ***REMOVED***
    ***REMOVED***)
***REMOVED***

// 每次重跑 job 手动执行一次同步
syncWakaTimeToGist(config.syncGistId)

// 每天1点30分30秒执行该job
const job = schedule.scheduleJob('30 30 1 * * *', function() {
  syncWakaTimeToGist(config.syncGistId)
***REMOVED***)
