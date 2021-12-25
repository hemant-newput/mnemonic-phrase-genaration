
import { MESSAGES } from "../constants/messageConstant";
import { ValidatorService } from "../services/validatorService";
import { BadRequestError } from "../utils/customError";

export const ValidateController = {
    validateMnemonics: async (req: any, res: any) => {
        console.log(req.body)
        const phrase = req.body.phrase;
        if (phrase.trim().split(/\s+/g).length >= 12) {
            return await ValidatorService.validateMnemonics(phrase);
        } else {
            throw new BadRequestError(MESSAGES.INVALID_PHRASE_LENGTH);
        }
    },
    validateManualMenemonics: async (req: any, res: any) => {
        console.log(req.body)
        return await ValidatorService.validateManualMenemonics(req.body);
    },

}
