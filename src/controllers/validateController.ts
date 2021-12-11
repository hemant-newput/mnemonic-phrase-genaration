
import { MESSAGES } from "../constants/messageConstant";
import { ValidatorService } from "../services/validatorService";
import { BadRequestError } from "../utils/customError";

export const ValidateController = {
    
    validateMnemonics: async (req: any, res: any) => {
        const phrase = req.body.mnemonics;
        if (phrase.trim().split(/\s+/g).length >= 12) {
            return await ValidatorService.validateMnemonics(phrase);
        } else {
            throw new BadRequestError(MESSAGES.INVALID_PHRASE_LENGTH);
        }
    },

}
