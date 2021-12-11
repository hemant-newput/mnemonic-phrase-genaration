import { GeneratorService } from "../services/generatorService"

export const GenerateController = {
    generateMnemobics : async (req: any, res: any) => {
        const reqData = req.body;
        const response = await GeneratorService.generateMnemonics(reqData)
        res.status(200).send(response)
    }
}