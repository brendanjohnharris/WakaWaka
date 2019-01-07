import * as apis from '../constants/serverApis'
import Axios from 'axios'

class ServerPushService {
  constructor(key) {
    this.key = key
  ***REMOVED***

  /**
   *
   * @param {****REMOVED*** text 标题，最初256，必需
   * @param {****REMOVED*** desp 消息内容，最长64kb，可空
   */
  sendMessageToWechat(text, desp) {
    if (typeof this.key !== 'undefined') {
      Axios.get(apis.push, {
        params: {
          text,
          desp
        ***REMOVED***
      ***REMOVED***).then(response => console.log(JSON.stringify(response.data)))
    ***REMOVED***
  ***REMOVED***
***REMOVED***

export default ServerPushService
