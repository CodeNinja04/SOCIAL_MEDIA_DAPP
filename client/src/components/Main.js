import React, { useEffect, useState, useRef } from "react";
import Socialabi from "../contracts/Social.json";
import Web3 from "web3";
//import Navbar from "./components/Navbar";

function Main() {
  const [account, setAccount] = useState("");
  const [data, setData] = useState("");
  const [balance, setBalance] = useState("");
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [event, setEvent] = useState();

  useEffect(() => {
    loadweb3();
    LoadBlockchaindata();
    //getEventbyid();
  }, []);

  const loadweb3 = async () => {
    if (window.etherium) {
      window.web3 = new Web3(window.etherium);
      await window.web3.etherium.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("non etherium browser");
    }
  };

  const LoadBlockchaindata = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    //console.log(accounts.toString());
    let amt = await window.web3.eth.getBalance(accounts[0]);
    const amt1 = await web3.utils.fromWei(amt, "ether");
    setBalance(amt1);
    console.log(amt1);

    const networkId = await web3.eth.net.getId();
    const networkData = Socialabi.networks[networkId];

    if (networkData) {
      const Socialdata = new web3.eth.Contract(
        Socialabi.abi,
        networkData.address
      );
      
      console.log(await Socialdata.methods);
      //const x = await Eventdata.methods.symbol().call();
      //setSymbol(x);
      //console.log(x);
    } else {
      window.alert("smart contract not deployed");
    }
  };


//   if (!data && !event) {
//     return <div>LOADING</div>;
//   }
  return (
    <div className="App">
      Hello
      <p>ACCOUNT:{account}</p>
      <p>BALANCE:{balance}</p>
     >
     
    </div>
  );
}

export default Main;