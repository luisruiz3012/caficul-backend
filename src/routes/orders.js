const router = require('express').Router();
const OrdersController = require('../controllers/Orders');

const controller = new OrdersController();

router.get('/', controller.getAllByWallet);
router.get('/', controller.getAll);
router.post('/', controller.create);

module.exports = router;