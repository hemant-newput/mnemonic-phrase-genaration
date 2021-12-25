import { Router } from 'express';
import { AddressController } from '../controllers/addressController';
import { response } from '../utils/responseUtil';


const router = Router();

router.post('/', response(AddressController.generateAddress));
router.post('/segwit', response(AddressController.generateSegWitAddress));
router.post('/testnet', response(AddressController.generateTestnetAddress));
router.post('/lite', response(AddressController.generateLiteCoinAddress));
router.post('/info', response(AddressController.fetchAddressInfo));

export default router;
