const { Outlet, UserOutlet } = require('../database/models');
const { logicError } = require('../etc/error-handler');
const { defaultLimit } = require('../etc/my-config');

/** @type {import("express").RequestHandler} */
exports.listOutlet = async (req, res) => {
    const limit = req.query.limit || defaultLimit;
    const page = req.query.page;
    const offset = page
        ? (Number(page) - 1) * limit
        : 0;
    
    const user = req.authedUser;
    try {
        if (user.rolename === 'admin') {
            // list all outlet
            await Outlet.findAll({
                limit,
                offset
            }).then(outlets => {
                res.json({ outlets })
            });
        } else {
            // list outlet belongs to this user
            await UserOutlet
                .listOutletOfUser(user.id, limit, offset)
                .then((outlets) => {
                    const result = outlets.map(row => row.Outlet);
                    res.json({ outlets: result });
                });
        }
    } catch (error) {
        logicError(error, res);
    }
};

/** @type {import("express").RequestHandler} */
exports.createOutlet = (req, res) => {
    const { name } = req.body;

    Outlet.create({
        name
    }).then(outlet => {
        res.status(201).json({ outlet });
    }).catch(error => {
        logicError(error, res);
    });
};
