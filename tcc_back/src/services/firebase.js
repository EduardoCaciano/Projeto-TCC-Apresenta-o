const admin = require("firebase-admin")

const serviceAccount = require("../config/firebase-key.json")
const BUCKET = 'everypets-b15b4.appspot.com'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
})

const bucket = admin.storage().bucket()

const uploadImage = (req, res, next) => {
  if (!req.file) return next

  const image = req.file
  const nameFile = Date.now() + '.' + image.originalname.split('.').pop()

  const file = bucket.file(nameFile)

  const stream = file.createWriteStream({
    metadata: {
      contentType: image.mimetype,
    }
  })

  stream.on('error', (e) => { console.error(e) })

  stream.on('finish', async () => {
    await file.makePublic()

    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nameFile}`

    next()
  })

  stream.end(image.buffer)
}

module.exports = uploadImage