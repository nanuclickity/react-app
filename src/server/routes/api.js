import { Router } from 'express'
import * as TracksController from 'controllers/tracks'

const router = Router()

router.get('/tracks', TracksController.getAll)
router.get('/tracks/search', TracksController.search)
router.get('/tracks/:id', TracksController.getOne)
router.get('/tracks/:id/stream', TracksController.streamOne)

export default router
