"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";

import { Address } from "~~/components/scaffold-eth";
import { AddressInput } from "~~/components/scaffold-eth";
import { useState } from "react";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [address, setAddress] = useState("");

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
      <div className="card bg-base-100 w-96 shadow-xl">
  
  <div className="card-body">
    
    <h2 className="card-title">Ingrese en DEBUG CONTRACTS</h2>
    <p className="card-title">Para usar los TOKENS y la Pool SimpleDEX.</p>
  </div>
</div>
      

      </div>
    </>
  );
};

export default Home;
