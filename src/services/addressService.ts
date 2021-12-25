import { ECPairAPI, ECPairFactory, TinySecp256k1Interface } from 'ecpair';
import { RegtestUtils } from 'regtest-client';
const bitcoin = require("bitcoinjs-lib")
export const AddressService = {
  generateAddress: async (reqData: any) => {
    const tinysecp: TinySecp256k1Interface = require('tiny-secp256k1');
    const ECPair: ECPairAPI = ECPairFactory(tinysecp);
    const keyPair = ECPair.makeRandom()
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    return address
  },
  generateSegWitAddress: async (reqData: any) => {
    const tinysecp: TinySecp256k1Interface = require('tiny-secp256k1');
    const ECPair: ECPairAPI = ECPairFactory(tinysecp);
    const keyPair = ECPair.fromWIF(
      'KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn',//WIF is representation private key
    );
    const { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey });
    return address
  },
  generateTestnetAddress: async (reqData: any) => {
    const tinysecp: TinySecp256k1Interface = require('tiny-secp256k1');
    const ECPair: ECPairAPI = ECPairFactory(tinysecp);
    const TESTNET = bitcoin.networks.testnet;
    const keyPair = ECPair.makeRandom({ network: TESTNET });
    const { address } = bitcoin.payments.p2pkh({
      pubkey: keyPair.publicKey,
      network: TESTNET,
    });
    return address
  },
  generateLiteCoinAddress: async (reqData: any) => {
    const tinysecp: TinySecp256k1Interface = require('tiny-secp256k1');
    const ECPair: ECPairAPI = ECPairFactory(tinysecp);
    const LITECOIN = {
      messagePrefix: '\x19Litecoin Signed Message:\n',
      bech32: 'ltc',
      bip32: {
        public: 0x019da462,
        private: 0x019d9cfe,
      },
      pubKeyHash: 0x30,
      scriptHash: 0x32,
      wif: 0xb0,
    };

    const keyPair = ECPair.makeRandom({ network: LITECOIN });
    const { address } = bitcoin.payments.p2pkh({
      pubkey: keyPair.publicKey,
      network: LITECOIN,
    });
    return address
  },
  fetchAddressInfo: async (address: string) => {
    const regtestUtils = new RegtestUtils({ APIPASS: 'satoshi', APIURL: 'https://regtest.bitbank.cc/1' });
    const dhttp = regtestUtils.dhttp;
    const result = await dhttp({
      method: 'GET',
      url: 'https://blockchain.info/rawaddr/' + address,
    });
    return result
  }
}

