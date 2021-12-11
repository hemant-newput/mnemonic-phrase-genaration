import * as bip39 from 'bip39'
import { convertBinaryToHex, convertHexToBinary, getEntropy, splitWord } from '../helpers/helper';
import { sha256 } from 'js-sha256';

export const GeneratorService = {
    generateMnemonics: async (reqData: any) => {
        console.log(`I will generate Mnemonics with ${JSON.stringify(reqData)}`);
        bip39.setDefaultWordlist(reqData.language);
        const mnemonic = bip39.generateMnemonic();
        return `Generated Phrases are ${mnemonic}`;
    },

    generateMnemonicsWithEntropy: async (reqData: any) => {
        const mnemonic = bip39.entropyToMnemonic(reqData.entropy);
        return { "entropy": `${reqData.entropy}`, "mnemonics": `${mnemonic}` };
    },

    getMnemonicsKeywords: async (language: string) => {
        return bip39.wordlists[`${language}`];
    },

    generateManualMnemonics: async (language: string) => {
        const randomNumber = getEntropy();
        const hexadecimal = convertBinaryToHex(randomNumber);
        const hashedValue = hexadecimal && sha256(hexadecimal);
        const checksum = hashedValue && convertHexToBinary(hashedValue[0]);
        const finalValue = (randomNumber + checksum);
        const phraseBinaryArray = splitWord(finalValue, 11);
        const words: string[] = [];
        phraseBinaryArray.map((chunk) => {
            words.push(bip39.wordlists[language][parseInt(chunk, 2) + 1]);
        })
        return words;
    }
}