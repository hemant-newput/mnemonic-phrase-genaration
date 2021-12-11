import * as bip39 from 'bip39'

export const ValidatorService = {
    validateMnemonics : async (reqData: any) => {
        const validate = bip39.validateMnemonic(reqData.mnemonic);
        return `Given Mnemonic is ${validate ? "Correct": "Incorrect"}`;
    },
    getEntropyFromMnemonic: async(reqData:any)=>{
        const entropy = bip39.mnemonicToEntropy(reqData.mnemonic)
        return `Entropy for ${reqData.mnemonic} is ${entropy}`;
    }
}