import { Router } from 'express';
import { ValidateController } from '../controllers/validateController';
import { response } from '../utils/responseUtil';

const router = Router();
router.get('/', response(ValidateController.validateMnemonics));

export default router;