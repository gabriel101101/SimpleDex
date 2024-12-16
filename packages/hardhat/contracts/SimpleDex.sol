///SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
//import "@openzeppelin/contracts/access/Ownable.sol";

contract SimpleDEX{

    uint256 public TKA;
    uint256 public TKB;
    uint256 public liquiTKA;
    uint256 public liquiTKB;
    
    IERC20 public tokenA;
    IERC20 public tokenB;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event LiquidityAdded(uint256 tkA, uint256 tkB, string);
    event LiquidityRemoved(uint256 tkA, uint256 tkB, string);

    

    constructor(address _tokenA, address _tokenB) {
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
    }


//añade liquidez
function addLiquidity(uint256 amountA, uint256 amountB) external  {
    
    tokenA.transferFrom(msg.sender, address(this), amountA);
    tokenB.transferFrom(msg.sender, address(this), amountB);
    TKA += amountA;
    TKB += amountB;

    emit Transfer(msg.sender, address(tokenA), amountA);
    emit Transfer(msg.sender, address(tokenB), amountB);

    emit  LiquidityAdded(amountA, amountB,"Se agrego liquidez al Pool");
}



//retira liquidez
function removeLiquidity(uint256 amountA, uint256 amountB) external  {

    TKA -= amountA;
    TKB -= amountB;
    tokenA.transfer(msg.sender, amountA);
    tokenB.transfer(msg.sender, amountB);

    emit Transfer(msg.sender, address(tokenA), amountA);
    emit Transfer(msg.sender, address(tokenB), amountB);

    emit LiquidityRemoved(amountA, amountB, "Se retiro Liquidez del Pool" );
}


//cambio token A por B
function swapAforB(uint256 amountAIn)external {
   
    liquiTKB = (TKB * TKA) / (TKA - amountAIn) - TKB;
    tokenB.transferFrom(msg.sender, address(this), liquiTKB);

    TKB = TKB - liquiTKB;
      
}



//cambio token B por A
function swapBforA(uint256 amountBIn) external {
 
    liquiTKA = TKA - (TKB * TKA) / (TKB + amountBIn);
    tokenB.transferFrom(msg.sender, address(this), liquiTKA);

    TKA = TKA - liquiTKA;

}


//Precio del token
function getPrice(address _token) external view  returns (uint256) {

        if (_token == address(tokenA)) {

            return TKB / TKA;

        } else if (_token == address(tokenB)) {

            return TKA / TKB;

        }
        return 0;
}



}