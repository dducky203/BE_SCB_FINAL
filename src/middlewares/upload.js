const multer = require('multer');
const path = require('path');
// Cấu hình Multer để xử lý upload file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      const fileName =  Date.now() + '-' + file.originalname;
      //file.fullPath = path.join(__dirname, 'uploads', fileName);
      //__dirname : thư mục hiện tại nơi file đang nằm
      file.fullPath = path.join('uploads', fileName);
      cb(null, fileName);
    },
  });
  
const upload = multer({ storage: storage });

module.exports = upload;