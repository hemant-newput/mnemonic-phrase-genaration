
import { ValidatorService } from "../services/validatorService";

export const ValidateController = {
    validateMnemobics : async (req: any, res: any) => {
        const reqData = req.body;
        const response = await ValidatorService.validateMnemonics(reqData)
        res.status(200).send(response)
    }
}
