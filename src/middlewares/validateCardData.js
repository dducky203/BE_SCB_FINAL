const Joi = require('joi');

const cardValidationSchema = Joi.object({
    cardTitle: Joi.string().required().messages({
        'any.required': `"cardTitle" không được bỏ trống !`,
    }),
    dueDate: Joi.date().required().messages({
        'any.required': `"dueDate" không được bỏ trống !`,
    }),
});



// Middleware kiểm tra và xác thực dữ liệu
const validateCardData = (req, res, next) => {
    const { error, value } = cardValidationSchema.validate(req.body, { abortEarly: false });
    console.log(error)
    if (error) {
        const errorMessages = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors: errorMessages });
    }

    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};

module.exports = validateCardData; 