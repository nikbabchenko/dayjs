import { populateTimeZones } from 'timezone-support/dist/lookup-convert'
import timeZoneData from 'timezone-support/dist/data'

populateTimeZones(timeZoneData)

export { default } from './custom'
