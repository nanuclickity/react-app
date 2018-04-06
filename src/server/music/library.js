import _ from 'lodash'
import fs from 'fs'
import plist from 'plist'
import { Config } from '../config'

const debug = require('debug')('react-app:music:library')

// eslint-disable-next-line no-unused-vars
var LIBRARY = {}

function buildLibrary(libAsString) {
  const parsed = plist.parse(libAsString)
  const { Tracks, ...others } = parsed
  const tracksCollection = Object.keys(Tracks).map(key => {
    const track = Object.keys(Tracks[key]).reduce((result, subkey) => {
      result[_.camelCase(subkey)] = Tracks[key][subkey]
      return result
    }, {})
    return track
  })

  return { ...others, Tracks: tracksCollection }
}

export function reloadLibrary(app) {
  const xmlPath = Config.ITUNES_XML_PATH

  return new Promise((resolve, reject) => {
    if (fs.existsSync(xmlPath)) {
      let raw = fs.readFileSync(xmlPath, 'utf-8')
      LIBRARY = buildLibrary(raw)
      debug('Loaded iTunes Library')
      resolve(app)
    } else {
      let err = new Error('Cannot load iTunes Library from: ' + xmlPath)
      reject(err)
    }
  })
}

export function getLibrary() {
  return LIBRARY
}
