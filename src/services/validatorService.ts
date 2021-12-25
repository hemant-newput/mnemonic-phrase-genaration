import * as bip39 from 'bip39'
import { fixedLengthValue } from '../helpers/helper';

export const ValidatorService = {
    validateMnemonics: async (phrase: any) => {
        const validate = bip39.validateMnemonic(phrase);
        return `Given Mnemonic is ${validate ? "Correct" : "Incorrect"}`;
    },
    getEntropyFromMnemonic: async (reqData: any) => {
        const entropy = bip39.mnemonicToEntropy(reqData.mnemonic)
        return `Entropy for ${reqData.mnemonic} is ${entropy}`;
    },
    validateManualMenemonics: async (reqData: any) => {
        let words = reqData.phrase.replace(/"/g, "").split(",")
        let finalValueString: string = "";
        words.map((word: string) => {
            let index = bip39.wordlists['english'].indexOf(word) 
            index-=1;
            const binaryValue = (index).toString(2)
            finalValueString += fixedLengthValue(binaryValue, 11)
        })
        console.log(finalValueString)
        const checksum = finalValueString.slice(-4)
        return checksum
    }
}
//101000101110100110110101100100110110110010010111101111101100011110110011011000000010111100000111011011111011000011011010110011110100