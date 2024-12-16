//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract TokenA is ERC20{
    constructor() ERC20("tokenA", "TKA"){
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

}

