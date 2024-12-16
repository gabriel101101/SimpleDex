import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "YourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */

const deployTokenB: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;
  
    // Desplegar el contrato ERC20
    const tokenB = await deploy("TokenB", {
      from: deployer,
      args: [], // Inicializar con 1 millón de tokens (o el valor que necesites)
      log: true,
    });
  
    // Obtener el contrato desplegado
    const tokenBContract = await hre.ethers.getContract("TokenB", deployer);
  
    // Si el contrato tiene una función name(), puedes llamarla así:
    //console.log("Token Name:", await tokenAContract.name());
  
    // También puedes llamar a otras funciones del contrato, como balanceOf, transfer, etc.
  };
  
  export default deployTokenB;