import web3 from "../web3";
import icoAbi from "./ico.json";

const contractAddr = "0x97e3ac29552af64fd065becac1a0c43e258c8c45";

//console.log(icoAbi);

const contractInstance = new web3.eth.Contract(icoAbi, contractAddr);
console.log(contractInstance.methods.totalSupply().call());

export default contractInstance;
