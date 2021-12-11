export const ValidatorService = {
    validateMnemonics : async (reqData: any) => {
        console.log(`I will validate Mnemonics with ${JSON.stringify(reqData)}`)
        return {
            "message": "Phrases are  "
        }
    }
}