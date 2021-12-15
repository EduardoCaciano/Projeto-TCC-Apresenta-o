const routes = require("express").Router()
const multeConfig = require("./config/multer")
const multer = require("multer")

const uploadImage = require("./services/firebase")

// SESSIONS
const sessionUserController = require("./controllers/sessionsUser")
const sessionEstablishmentController = require("./controllers/sessionsEstablishment")

// MIDDLEWARE DE AUTENTIFICAÇÃO
const authMiddleware = require("./middleware/authUser")

// CONTROLLERS
const userController = require("./controllers/users")
const petController = require("./controllers/pets")
const serviceController = require("./controllers/services")
const establishmentController = require("./controllers/establishment")
const sexController = require("./controllers/sex")
const animalTypeController = require("./controllers/animalType")
const establishmentType = require("./controllers/establishmentType")
const sizeController = require("./controllers/size")
const breedController = require("./controllers/breed")
const confirmationService = require("./controllers/confirmationServices")

const upload = multer(multeConfig)

routes.post('/sessionUser', sessionUserController.store)
routes.post('/sessionEstablishment', sessionEstablishmentController.store)
routes.post('/user', userController.store)
routes.post('/establishment', establishmentController.store)

routes.get('/user', userController.index)
routes.get('/sex', sexController.index)
routes.get('/breed', breedController.index)
routes.get('/size', sizeController.index)
routes.get('/animal_type', animalTypeController.index)
routes.get('/establishment_type', establishmentType.index)
routes.get('/service_mobile', serviceController.indexMobile)
routes.get('/establishment', establishmentController.index)

// ROTAS COM MIDDLEWARE ESTABELECIMENTO
routes.use(authMiddleware)

// routes.post('/services', upload.single('file'), serviceController.store)
routes.post('/service', upload.single('image'), uploadImage, serviceController.store)
routes.post('/animal_type', animalTypeController.store)
routes.post('/size', sizeController.store)
routes.post('/breed', breedController.store)
routes.post('/pets', petController.store)
routes.post('/confirmation_service', confirmationService.store)

routes.get('/pets', petController.index)
routes.get('/service', serviceController.index)

routes.put('/user', userController.update)
routes.put('/pets', petController.update)
routes.put('/establishment', establishmentController.update)
routes.put('/service', upload.single('file'), serviceController.update)

routes.delete('/animal_type', animalTypeController.delete)
routes.delete('/size', sizeController.delete)
routes.delete('/breed', breedController.delete)
routes.delete('/user', userController.delete)
routes.delete('/pets/:id', petController.delete)
routes.delete('/establishment', establishmentController.delete)
routes.delete('/service/:id', serviceController.delete)

module.exports = routes