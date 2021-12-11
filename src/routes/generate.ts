import { Router } from 'express';
import { GenerateController } from '../controllers/generateController';
import { response } from '../utils/responseUtil';

const router = Router();
router.post('/', response(GenerateController.generateMnemobics));
router.get('/wordlist', response(GenerateController.getMnemonicsKeywords));
router.post('/manual', response(GenerateController.generateMnemonicsManually));
router.get('/entropy', response(GenerateController.generateEntropy));

export default router;
