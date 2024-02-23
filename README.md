# Solana Token Balance Analyzer

## Installation

To install this program, you will need Node.js and git 

* https://github.com/git-guides/install-git
* https://nodejs.org/en/download

Once both installed, restart your comptuter and then make a folder which will contain the program, open the terminal on the folder location and run
```sh
git clone https://github.com/dogevroum/solana_token_balance_analyzer.git
```
Then go into "solana_token_balance_analyzer" folder and run
```sh
npm ci
```
The program should be correctly installed, to run it type in your terminal
```sh
npx esrun main.ts <publickey>
```
Of course, replace "publickey" with the public key of a wallet (without the <>) you want to analyze

## Troubleshooting
If you have any trouble to use my program, simply contact me on Discord, my username is `dogevr`

## Customisation
You can change the RPC on the line 17 of __main.ts__
```ts
const connection = new Connection("https://api.mainnet-beta.solana.com");
```
Just change https://api.mainnet-beta.solana.com by the one you want to use

## My networks
You can find me on discord, my username is `dogevr`