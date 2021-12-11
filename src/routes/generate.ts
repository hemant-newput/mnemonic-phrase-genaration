import { Router } from 'express';
import { GenerateController } from '../controllers/generateController';

const router = Router();
router.get('/', GenerateController.generateMnemobics);

export default router;
