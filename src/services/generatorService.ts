import * as bip39 from 'bip39'
import { convertBinaryToHex, convertHexToBinary, getEntropy, splitWord } from '../helpers/helper';
import * as crypto from 'crypto'
export const GeneratorService = {
    generateMnemonics: async (reqData: any) => {
        console.log(`I will generate Mnemonics with ${JSON.stringify(reqData)}`);
        console.log(reqData)
        bip39.setDefaultWordlist(reqData.language);
        let mnemonics;
        while (true) {
            mnemonics = bip39.generateMnemonic();
            console.log(mnemonics)
            if (bip39.validateMnemonic(mnemonics)) {
                break
            }
        }
        return `Generated Phrases are ${mnemonics}`;
    },

    generateMnemonicsWithEntropy: async (reqData: any) => {
        const mnemonic = bip39.entropyToMnemonic(reqData.entropy);
        return { "entropy": `${reqData.entropy}`, "mnemonics": `${mnemonic}` };
    },

    getMnemonicsKeywords: async (language: string) => {
        return bip39.wordlists[`${language}`];
    },

    generateManualMnemonics: async (reqData: any) => {
        const randomNumber = reqData.entropy || getEntropy();
        const hexadecimal = convertBinaryToHex(randomNumber);
        const buffer = hexadecimal && Buffer.from(hexadecimal.toString(), 'hex')
        let hashedValue = buffer && crypto.createHash('sha256').update(buffer).digest('hex')
        const checksum = hashedValue && convertHexToBinary(hashedValue[0]);
        const finalValue = (randomNumber + checksum);
        const phraseBinaryArray = splitWord(finalValue, 11);
        const words: string[] = [];
        phraseBinaryArray.map((chunk) => {
            words.push(bip39.wordlists[reqData.language][parseInt(chunk, 2) + 1]);
        })
        return {words, checksum};
    }
}

// ** always use buffer to move from datatype to datatype