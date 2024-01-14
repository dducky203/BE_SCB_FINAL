const Joi = require('joi');

const accountValidationSchema = Joi.object({
    username: Joi.string().trim().alphanum().required().messages({
        'any.required': `"username" không được bỏ trống !`,
        'string.trim': `"username" không hợp lệ !`,
        'string.alphanum': `"username" không hợp lệ !`,
    }),
    password: Joi.string().min(6).required().messages({
        'any.required': `"password" không được bỏ trống !`,
        'string.min':`"password" phải nhiều hơn 6 ký tự !"`,
    })
}); 



// Middleware kiểm tra và xác thực dữ liệu
const validateAccountData = (req, res, next) => {
    const { error, value } = accountValidationSchema.validate(req.body, { abortEarly: false });
    console.log(error)
    if (error) {
        const errorMessages = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors: errorMessages });
    }

    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};

module.exports = validateAccountData;