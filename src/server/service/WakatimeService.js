import Axios from 'axios'
import * as wakatimeApis from '../constants/wakatimeApis'
import { WAKATIME_API_KEY ***REMOVED*** from '../../../key.config'

class WakaTimeService {
  constructor() {***REMOVED***

  fetchSummaries(date) {
    const self = this
    return Axios.get(wakatimeApis.summaries, {
      params: {
        start: date,
        end: date,
        api_key: WAKATIME_API_KEY //  eslint-disable-line
      ***REMOVED***
    ***REMOVED***).then(response => response.data)
  ***REMOVED***
***REMOVED***

export default WakaTimeService
