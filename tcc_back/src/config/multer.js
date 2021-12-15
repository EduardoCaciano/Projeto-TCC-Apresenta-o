const multer = require("multer")

module.exports = {
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/jfif'
    ]

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      console.log(file);
      cb(new Error('Tipo do arquivo inválido'), false)
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 2, //máximo de 5Mb
  },

  storage: multer.memoryStorage(),
}
