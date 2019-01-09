import Axios from 'axios'
import * as wakatimeApis from '../constants/wakatimeApis'

class WakaTimeService {
  apiKey: string
  constructor(apiKey: string) {
    this.apiKey = apiKey
  ***REMOVED***

  fetchSummaries(date: string) {
    const self = this
    return Axios.get(wakatimeApis.summaries, {
      params: {
        start: date,
        end: date,
        api_key: self.apiKey //  eslint-disable-line
      ***REMOVED***
    ***REMOVED***).then(response => response.data)
  ***REMOVED***
***REMOVED***

export default WakaTimeService
