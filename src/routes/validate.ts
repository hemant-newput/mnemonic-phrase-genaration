import { Router } from 'express';
import { ValidateController } from '../controllers/validateController';
import { response } from '../utils/responseUtil';

const router = Router();

router.post('/', response(ValidateController.validateMnemonics));
router.post('/manual', response(ValidateController.validateManualMenemonics));

export default router;