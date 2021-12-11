import { Router } from 'express';
import { ValidateController } from '../controllers/validateController';

const router = Router();
router.get('/', ValidateController.validateMnemobics);

export default router;