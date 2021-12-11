import * as bip39 from 'bip39'
import { convertBinaryToHex, convertHexToBinary, getEntropy, splitWord } from '../helpers/helper';
import { sha256 } from 'js-sha256';

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
        const hashedValue = hexadecimal && sha256(hexadecimal);
        const checksum = hashedValue && convertHexToBinary(hashedValue[0]);
        const finalValue = (randomNumber + checksum);
        const phraseBinaryArray = splitWord(finalValue, 11);
        const words: string[] = [];
        phraseBinaryArray.map((chunk) => {
            words.push(bip39.wordlists[reqData.language][parseInt(chunk, 2) + 1]);
        })
        return words;
    }
}