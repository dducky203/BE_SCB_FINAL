const Joi = require('joi');

const listValidationSchema = Joi.object({
    listTitle: Joi.string().required().messages({
        'any.required': `"title" không được bỏ trống !`,
    }),
    location: Joi.number().required().messages({
        'any.required': `"location" không được bỏ trống !`,
    }),
});



// Middleware kiểm tra và xác thực dữ liệu
const validateListData = (req, res, next) => {
    const { error, value } = listValidationSchema.validate(req.body, { abortEarly: false });
    console.log(error)
    if (error) {
        const errorMessages = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors: errorMessages });
    }

    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};

module.exports = validateListData; 