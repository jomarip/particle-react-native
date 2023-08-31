export interface AccountInfo {
    isDeployed: boolean;
    chainId: number;
    eoaAddress: string;
    factoryAddress: string;
    entryPointAddress: string;
    smartAccountAddress: string;
    owner: string;
    index: number;
    implementationAddress: string;
    fallBackHandlerAddress: string;
    version: string;
    createdAt: number;
    updatedAt: string;
}
