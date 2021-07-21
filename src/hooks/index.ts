import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
import simpleContractAbi from "../abi/SimpleContract.json";
import { simpleContractAddress } from "../contracts"

const simpleContractInterface = new ethers.utils.Interface(simpleContractAbi);
const contract = new Contract(simpleContractAddress, simpleContractInterface);

export function useCount() {
  const [count]: any = useContractCall({
    abi: simpleContractInterface,
    address: simpleContractAddress,
    method: "count",
    args: [],
  }) ?? [];
  return count;
}

export function useContractMethod(methodName: string) {
    const { state, send } = useContractFunction(contract, methodName, {});
    return { state, send };
  }