import Axios from 'axios'
import * as gistApis from '../constants/gistApis'

type GistData = {
  description: string
  public: boolean
  files: any
***REMOVED***
class GithubService {
  token: string
  GIST_JSON_EMPTY: GistData
  constructor(token: string) {
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

  updateGist(gistId: string, date: string, content: string) {
    const self = this
    const gistJson = {
      files: {
        [`summaries_${date***REMOVED***.json`]: {
          content: JSON.stringify(content)
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
    return Axios.request({
      method: 'PATCH',
      url: `${gistApis.gist***REMOVED***/${gistId***REMOVED***`,
      headers: { Authorization: `token ${self.token***REMOVED***` ***REMOVED***,
      data: gistJson
    ***REMOVED***)
  ***REMOVED***
***REMOVED***

export default GithubService
