export const GeneratorService = {
    generateMnemonics : async (reqData: any) => {
        console.log(`I will generate Mnemonics with ${JSON.stringify(reqData)}`)
        return {
            "message": "Generated Phrases are "
        }
    }
}