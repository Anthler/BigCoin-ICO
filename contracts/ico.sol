pragma solidity >=0.4.21 <0.6.0;

//pragma solidity ^0.4.24;

contract ERC20Interface {
    function totalSupply() public view returns (uint);
    function balanceOf(address tokenOwner) public view returns (uint balance);
    function allowance(address tokenOwner, address spender) public view returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}

library SafeMath {
    function add(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function sub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
    function mul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function div(uint a, uint b) internal pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}

contract ICO is ERC20Interface{
    using SafeMath for uint;
    
    string public name;
    string public symbol;
    uint public decimals;
    uint public icoStarts;
    uint public icoEnds;
    uint public bonusEnds;
    uint public allContributors;
    uint public allTokens;
    address payable admin;
    mapping(address => uint) public balances;

    mapping(address => mapping(address => uint)) allowed;
    
    constructor() public {
        name = "BigCoin";
        symbol = "BGC";
        decimals = 18;
        icoStarts = now + 1 weeks;
        icoEnds = now + 2 weeks;
        bonusEnds = now + 3 days;
        admin = msg.sender;
        allContributors = 0;
        allTokens = 1000000000000000000 * 100;
        balances[msg.sender] += allTokens;
        
        
    }
    
    function buyTokens() public payable {
        uint tokens;
        if(now <= bonusEnds){
            tokens = msg.value.mul(125);
        }else{
            tokens = msg.value.mul(100);
        }
        tokens = msg.value.mul(100);
        balances[msg.sender] = balances[msg.sender].add(tokens);
        allTokens = allTokens.add(tokens);
        emit Transfer(address(0), msg.sender, tokens);
        allContributors++;
    }
    
    function totalSupply() public view returns(uint){
        return allTokens;
    }
    function myBalance() public view returns(uint) {
        return(balances[msg.sender]);
    }
    
    function myAddress() public view returns(address){
        address myAddr;
        myAddr = msg.sender;
        return myAddr;
    }
    
    function endSale() public {
        require(msg.sender == admin);
        admin.transfer(address(this).balance);
    }
    

    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];
    }

    function transfer(address to, uint tokens) public returns (bool success) {
        balances[msg.sender] = balances[msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }

    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        balances[from] = balances[from].sub(tokens);
        allowed[from][msg.sender] = allowed[from][msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(from, to, tokens);
        return true;
    }

    function allowance(address tokenOwner, address spender) public view returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }

}