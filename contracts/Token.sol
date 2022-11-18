pragma solidity ^0.8.4;

import "./ERC20.abstract.sol";

contract Token is AERC20 {

    address founder;

    constructor(
        string memory _name, 
        string memory _symbol, 
        uint _totalSupply, 
        uint8 _decimals
    ) AERC20(_name, _symbol, _totalSupply, _decimals) {
        founder = msg.sender;
        balances[founder] = _totalSupply;
    }

}