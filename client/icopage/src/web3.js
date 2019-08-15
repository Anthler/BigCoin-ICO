import Web3 from "web3";
let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
  //console.log(web3.version);
} else {
  const provider = Web3.providers.HttpProvider(
    "rinkeby.infura.io/v3/5a705e38d7704b26a676c46394ab8920"
  );
  web3 = new Web3(provider);
}

export default web3;
