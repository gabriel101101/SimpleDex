import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */

    const deploySimpleDex: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;

    const tokenA = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const tokenB = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
    
    const simpleDex = await deploy("SimpleDEX", {
      from: deployer,
      args: [tokenA, tokenB], 
      log: true,
    });
  
    // Obtener el contrato desplegado
    const simpleDexContract = await hre.ethers.getContract("SimpleDEX", deployer);
  
    // Si el contrato tiene una función name(), puedes llamarla así:
    //console.log("Token Name:", await tokenAContract.name());
  
    // También puedes llamar a otras funciones del contrato, como balanceOf, transfer, etc.
  };
  
  export default deploySimpleDex;