const { body } = require('express-validator')

exports.validateCreateOutlet = () => [
    body('name')
        .notEmpty()
        .withMessage('name is required')
        .bail() // continue only when previous check is valid
        .isString()
        .withMessage('name must be a string'),
];
 