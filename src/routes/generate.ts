import { Router } from 'express';
import { GenerateController } from '../controllers/generateController';
import { response } from '../utils/responseUtil';

const router = Router();
router.get('/', response(GenerateController.generateMnemobics));
router.get('/wordlist', response(GenerateController.getMnemonicsKeywords));
router.get('/manual', response(GenerateController.generateMnemonicsManually));



export default router;
