import { useState, useEffect } from "react";
import { connectWallet, getAccount } from "./utils/wallet";
import { depositfunds } from "./utils/operation";

// Components
import Navbar from "./components/Navbar";


const App = () => {
  // Players holding lottery tickets
  const [players, setPlayers] = useState([]);
  const [tickets, setTickets] = useState(5);
  const [loading, setLoading] = useState(false);
  const [account, Setaccount] = useState("");

  // Set players and tickets remaining
  useEffect(() => {
    // TODO 9 - Fetch players and tickets remaining from storage
    (async () => {
      setPlayers([]);
      setTickets(5);
      const activeAccount = await getAccount();
      Setaccount(activeAccount);
    })();
  }, []);

  // TODO 7.a - Complete onBuyTicket function
  const onBuyTicket = async () => {};

  // TODO 11.a - Complete onEndGame function
  const onEndGame = async () => {};

  //Connect Wallet dito na lang nilagay
  const onConnectWallet = async() => {
    await connectWallet();
    const activeAccount = await getAccount();
  }

  const onDepositFunds = async() => {
    await depositfunds();
  }

  return (
    <div className="main">

      <div className="deposit">
      <div
        style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
        }}
      >

        <button onClick = {onConnectWallet} className="coneectwallet-button"> 
          Connect Wallet
        </button>

      </div>
      </div>

      <div className="h2">
      <div
        style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
        }}
      >

       Deposit Funds

      </div>
      </div>

      <div className="secret-input">
      <div
        style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
        }}
      >

        <form>
        <label>Amount:
          <input type="text" />
        </label>
        </form>

      </div>
      </div>


      <div className="deposit">
      <div
        style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
        }}
      >

        <button onClick = {onDepositFunds}  className="depositfunds-button"> 
          Deposit Funds 
        </button>

      </div>
      </div>

      <div className="h2">
      <div
        style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
        }}
      >

       Claim Funds

      </div>
      </div>

      <div className="secret-input">
      <div
        style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
        }}
      >

        <form>
        <label> Hashed Secret:
          <input type="text" />
        </label>
        </form>

      </div>
      </div>

      <div className="claim">
      <div
        style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
        }}
        >
        <button className="claimfunds-button"> Claim Funds </button>

      </div>
      </div>
    </div>
  );
};

export default App;
