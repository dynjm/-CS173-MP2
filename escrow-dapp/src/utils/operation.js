// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation

import { tezos } from "./tezos";

export const depositfunds = async () => {
    try {
        const contract = await tezos.wallet.at("KT1NB3aaRikyNTPttDMEuz5oVixZFwtknM1J");
        await contract.methods.addBalanceOwner().send({
            //amount: 1,
            //mutez: true,
        });
        //await op.confirmation(1);
    }
    catch(err) {
        throw err;
    }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

export const endGameOperation = async () => {};
