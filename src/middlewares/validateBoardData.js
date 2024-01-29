const Joi = require('joi');

const boardValidationSchema = Joi.object({
    title: Joi.string().required().messages({
        'any.required': `"title" không được bỏ trống !`,
    }),
   
});



// Middleware kiểm tra và xác thực dữ liệu
const validateBoardData = (req, res, next) => {
    const { error, value } = boardValidationSchema.validate(req.body, { abortEarly: false });
    console.log(error)
    if (error) {
        const errorMessages = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors: errorMessages });
    }

    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};

module.exports = validateBoardData; 