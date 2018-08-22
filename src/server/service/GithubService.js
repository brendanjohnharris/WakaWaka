import Axios from 'axios'
import * as gistApis from '../constants/gistApis'

class GithubService {
  constructor(token) {
    this.token = token
    this.GIST_JSON_EMPTY = {
      description: 'WakaTime Data Sync Gist',
      public: false,
      files: {
        'wakaTime Sync': {
          content: '// Empty'
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***

  createGist(date, content) {
    const self = this
    const gistJson = self.GIST_JSON_EMPTY
    gistJson.files['wakaTime Sync'].content = `Last Update ${new Date()***REMOVED***`
    gistJson.files[`summaries_${date***REMOVED***.json`] = {
      content: JSON.stringify(content)
    ***REMOVED***
    Axios.request({
      method: 'POST',
      url: gistApis.gist,
      headers: { Authorization: `token ${self.token***REMOVED***` ***REMOVED***,
      data: gistJson
    ***REMOVED***)
  ***REMOVED***

  updateGist(gistId, date, content) {
    const self = this
    const gistJson = {
      files: {
        [`summaries_${date***REMOVED***.json`]: {
          content: JSON.stringify(content)
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    Axios.request({
      method: 'PATCH',
      url: `${gistApis.gist***REMOVED***/${gistId***REMOVED***`,
      headers: { Authorization: `token ${self.token***REMOVED***` ***REMOVED***,
      data: gistJson
    ***REMOVED***)
  ***REMOVED***
***REMOVED***

export default GithubService
