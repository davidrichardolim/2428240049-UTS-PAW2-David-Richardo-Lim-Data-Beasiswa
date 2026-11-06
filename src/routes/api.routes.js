import express from 'express'

import upload from '../config/upload.js'
import BeasiswaController from '../controllers/beasiswa.controller.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'
import { logMiddleware } from '../middleware/log.middleware.js'

const router = express.Router()

router.use(logMiddleware)

router.get('/welcome', WelcomeController.welcome)
router.post('/users', UserController.store)
router.post('/upload', upload.single('file'), UploadController.store)

router.post('/beasiswa', BeasiswaController.store)
router.get('/beasiswa', BeasiswaController.index)
router.get('/beasiswa/:id', BeasiswaController.show)
router.put('/beasiswa/:id', BeasiswaController.update)
router.patch('/beasiswa/:id', BeasiswaController.update)
router.delete('/beasiswa/:id', BeasiswaController.delete)

export default router
