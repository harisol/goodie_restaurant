const { body } = require('express-validator')

exports.validateCreateRole = () => [
    body('rolename')
        .notEmpty()
        .withMessage('rolename is required')
        .bail() // continue only when previous check is valid
        .isString()
        .withMessage('rolename must be a string'),
];
 