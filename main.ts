// Set up some libraries
import { AccountLayout, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";

// Public key input
const publicKey = process.argv[2] || "";
if (publicKey === "") {
    console.log('Please provide a public key argument');
    process.exit(1);
}

// Set up a timer
const startTime: Date = new Date();

// Put your RPC here,
// If you don't have one, take one on here : https://docs.solana.com/cluster/rpc-endpoints
const connection = new Connection("https://api.mainnet-beta.solana.com");

const tokenAccounts = await connection.getTokenAccountsByOwner(
    new PublicKey(publicKey), {
        programId: TOKEN_PROGRAM_ID,
    }
);

// Interface for the terminal
console.log("\nTOKEN :                                          BALANCE :");
tokenAccounts.value.forEach((tokenAccount) => {
    const accountData = AccountLayout.decode(tokenAccount.account.data);
    console.log(`${new PublicKey(accountData.mint)}     ${accountData.amount}`);
});

// End the timer
const endTime: Date = new Date();
const timeElapsed: number = endTime.getTime() - startTime.getTime();
console.log(`\nTIME ELAPSED : ${(timeElapsed / 1000)} seconds\n`);
