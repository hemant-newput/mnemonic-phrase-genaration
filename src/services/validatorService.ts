import * as bip39 from 'bip39'

export const ValidatorService = {
    validateMnemonics : async (phrase: any) => {
        const validate = bip39.validateMnemonic(phrase);
        return `Given Mnemonic is ${validate ? "Correct": "Incorrect"}`;
    },
    getEntropyFromMnemonic: async(reqData:any)=>{
        const entropy = bip39.mnemonicToEntropy(reqData.mnemonic)
        return `Entropy for ${reqData.mnemonic} is ${entropy}`;
    }
}