const { Router } = require('express');
const auth = require('../controllers/auth.controller');
const { checkToken, adminOnly } = require('../etc/middleware');
const outletController = require('../controllers/outlet.controller');
const roleController = require('../controllers/role.controller');
const userController = require('../controllers/user.controller');
const { isValid } = require('../etc/error-handler');
const { validateCreateRole } = require('../validation/role.validation');
const { validateCreateUser } = require('../validation/user.validation');
const { validateCreateOutlet } = require('../validation/outlet.validation');

const router = Router();

// register jwt middleware to this router
router.use(checkToken);

router.get('/', (req, res) => res.json({ message: 'Welcome' }))
router.post('/login', auth.login); // for logout, just detroy token in client storage

router.get('/role', adminOnly, roleController.listRole);
router.post('/role', adminOnly, validateCreateRole(), isValid, roleController.createRole);

router.get('/user', adminOnly, userController.listUser);
router.post('/user', adminOnly, validateCreateUser(), isValid, userController.createUser);

router.post('/outlet', adminOnly, validateCreateOutlet(), isValid, outletController.createOutlet);
router.get('/outlet', outletController.listOutlet);
// end routes with middleware

module.exports = router;
