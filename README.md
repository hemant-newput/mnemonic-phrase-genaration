# Mnemonic-phrase-genaration
An Express API to generate an validate mnemonic phrases

BIP39 is the use of a mnemonic phrase -- a group of easy to remember words -- to serve as a back up to recover your wallet and coins in the event your wallet becomes compromised, lost, or destroyed. This is also known as a mnemonic seed, seed phrase, recovery phrase, wallet back up, master seed, etc. 

Your seed phrase is what governs your wallet. If you use a standard wallet, anyone who has access to it can instantly transfer all your assets to another address outside your control. Your seed is made of 12 to 24 words, the order of which is important.

The list of API u can use in this repo are

1. POST  /generate  -> This will generate a new Mnemonic phrase from you using the BIP39 Package
2. POST /validate   -> This will validate your Mnemonic phrases if they are space seperated
3. GET /wordlist    -> This will give the mnemonics dictionary in any language passes by query params
4. GET /entropy     -> This will give random generated number in binary (128 bit)
5. POST /manual     -> This generates mnemonics phrases without the bip39 package. keep in mind that phrase generation depends upon entropy. so probablity of you manually generated phrase is very less

