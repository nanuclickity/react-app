import _ from 'lodash'
import path from 'path'
import fs from 'fs'
import { getLibrary } from 'music/library'

import Fuse from 'fuse.js'

const debug = require('debug')('react-app:controller:tracks')

export function getAll(req, res, next) {
  res.json(getLibrary())
}

export function search(req, res, next) {
  var query = req.query.q || false
  var key = req.query.key || 'name'

  const tracks = getLibrary().Tracks

  var fuzzy = new Fuse(tracks, {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    keys: [key]
  })

  debug(`Search: q=${query}&key=${key}`)

  if (!query) {
    return res.json([])
  }

  var data = fuzzy.search(query)
  res.json(data || [])
}

export function getOne(req, res, next) {
  var trackId = Number(req.params.id)

  res.json(_.find(getLibrary().Tracks, { trackId }) || {})
}

export function streamOne(req, res, next) {
  var trackId = Number(req.params.id)
  var status = 404 //eslint-disable-line no-unused-vars
  var error = false //eslint-disable-line no-unused-vars

  if (!Number.isInteger(trackId)) {
    status = 404
    error = `Invalid 'id': ${req.params.id}`
  }

  const track = _.find(getLibrary().Tracks, { trackId })

  if (!track) {
    error = `No track found with 'id': ${trackId}`
  }

  if (error) {
    return res.status(status).json({
      message: error
    })
  }

  const filePath = path.resolve(
    decodeURI(track.location.replace('file://', ''))
  )

  fs.createReadStream(filePath).pipe(res)
}
