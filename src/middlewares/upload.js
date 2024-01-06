const multer = require('multer');
// Cấu hình Multer để xử lý upload file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
const upload = multer({ storage: storage });

module.exports = upload.single('cover');