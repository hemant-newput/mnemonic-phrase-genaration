import { LANGUAGES, MESSAGES } from "../constants/messageConstant";
import { getEntropy } from "../helpers/helper";
import { GeneratorService } from "../services/generatorService"
import { InternalServerError } from "../utils/customError";

export const GenerateController = {
    generateMnemobics: async (req: any, res: any) => {
        const reqData = {
            language: req.query.language || LANGUAGES.DEFAULT_LANGUAGE
        }
        const response = await GeneratorService.generateMnemonics(reqData);
        return response;
    },
    getMnemonicsKeywords: async (req: any, res: any) => {
        try {
            const language = req.query.language || LANGUAGES.DEFAULT_LANGUAGE;
            const wordList = await GeneratorService.getMnemonicsKeywords(language);
            return wordList;
        } catch (error) {
            throw new InternalServerError(MESSAGES.KEYWORD_GENERATION_FAILED)
        }
    },
    generateEntropy: async (req: any, res: any) => {
        return getEntropy();
    },
    generateMnemonicsManually: async (req: any, res: any) => {
        try {
            const language = req.query.language || LANGUAGES.DEFAULT_LANGUAGE
            return await GeneratorService.generateManualMnemonics(language);
        } catch (error) {
            throw new InternalServerError(MESSAGES.MNEMONIC_GENERATION_FAILURE)
        }
    }
}