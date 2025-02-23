// import { Keypair } from "@solana/web3.js";

// const keypair = Keypair.generate();
// console.log(`The public key`, keypair.publicKey.toBase58());
// console.log(`The secret key`, keypair.secretKey);
// console.log(`✅ Generated keypair!`)

import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";


const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file!`
  );