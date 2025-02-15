export interface addressesParameter {
  NativeERC20: string,
  ERC20Proxy: string,
  ERC721Proxy: string,
  ERC1155Proxy: string,
  Forwarder: string | boolean,
  Exchange: string,
  DevUtils: string,
  Collections: string,
  RoyaltiesManager: string,
  NFTrade721?: string,
  GreenPay?:string,
}

const addresses: { [chainId: number]: addressesParameter } = {
  1: {
    NativeERC20: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    ERC20Proxy: '0x2559Be60A7040D645D263cA54c936320f90be74b',
    ERC721Proxy: '0x295f911ccb8C771593375a4e8969A124bad725d8',
    ERC1155Proxy: '0xf1899184bF3d26c4Db243C3B803501FC3E6cb388',
    Forwarder: '0x833b94aFa97B7E763a86A3E83dcaf58603857371',
    Exchange: '0x3AF5D58120D106A1d97Dd9E90f18F5181D2360ee',
    DevUtils: '0xA9F9aDD9Ce680611ab3D7d2b5419EeFa29388781',
    NFTrade721: '0xcEcC2d4E3E6590b9cb9f662f62171f441cbCa40C',
    Collections: '0x091746ba9fed9936ac0b080e7a735b41239b240b',
    RoyaltiesManager: '0x7E65237E76E0c290b544Be42C0fb88d4950bB666',
  },
  56: {
    NativeERC20: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    ERC20Proxy: '0xE05D2BAA855C3dBA7b4762D2f02E9012Fb5F3867',
    ERC721Proxy: '0x2559Be60A7040D645D263cA54c936320f90be74b',
    ERC1155Proxy: '0x295f911ccb8C771593375a4e8969A124bad725d8',
    Forwarder: '0xc28F1550160478a7FB3b085F25d4b179E08E649a',
    Exchange: '0xcFB6Ee27d82beb1B0f3aD501B968F01CD7Cc5961',
    DevUtils: '0x727B32e57EC4a751507d1aB745404cbAe480deB6',
    NFTrade721: '0xcEcC2d4E3E6590b9cb9f662f62171f441cbCa40C',
    Collections: '0x0f354194014300FdBbcFDdEBF4B7ca1819454D13',
    RoyaltiesManager: '0xCbB74218c5C12e482735001739Db4FAe44F9af49',
    GreenPay: '0x0B5A3d2c6999a7193B42deEc32AB4AFBb9A9e70B',
  },
  43114: {
    NativeERC20: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    ERC20Proxy: '0xE05D2BAA855C3dBA7b4762D2f02E9012Fb5F3867',
    ERC721Proxy: '0x2559Be60A7040D645D263cA54c936320f90be74b',
    ERC1155Proxy: '0x295f911ccb8C771593375a4e8969A124bad725d8',
    Forwarder: '0xc28F1550160478a7FB3b085F25d4b179E08E649a',
    Exchange: '0xcFB6Ee27d82beb1B0f3aD501B968F01CD7Cc5961',
    DevUtils: '0x727B32e57EC4a751507d1aB745404cbAe480deB6',
    NFTrade721: '0x71c82Fdbbdb6fb641f680087DA5aBEFFDDfE66a3',
    Collections: '0x5F67aBe0A2A673536E5A57af8e00b28f289f419E',
    RoyaltiesManager: '0x0190052a36373eCdCd7BB4BDD003D751F60D00BE',

  },
  137: {
    NativeERC20: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    ERC20Proxy: '0xE05D2BAA855C3dBA7b4762D2f02E9012Fb5F3867',
    ERC721Proxy: '0x2559Be60A7040D645D263cA54c936320f90be74b',
    ERC1155Proxy: '0x295f911ccb8C771593375a4e8969A124bad725d8',
    Forwarder: '0xc28F1550160478a7FB3b085F25d4b179E08E649a',
    Exchange: '0xcFB6Ee27d82beb1B0f3aD501B968F01CD7Cc5961',
    DevUtils: '0x727B32e57EC4a751507d1aB745404cbAe480deB6',
    NFTrade721: '0x6418d019aec4409E4830bc5C063B180d976a609F',
    Collections: '0x535D6657A9226c84ed341E38a20E0b756418C474',
    RoyaltiesManager: '0x96A5429655eddBB2b581cc4F582776813c6895B4',
  },
  1285: {
    NativeERC20: '0x98878B06940aE243284CA214f92Bb71a2b032B8A',
    ERC20Proxy: '0x5f67abe0a2a673536e5a57af8e00b28f289f419e',
    ERC721Proxy: '0x6a8b4a611c46bc3ee5ec451af8807433dcde9855',
    ERC1155Proxy: '0xac7F0A410B08D3f0B134C7f48F09863915770FB5',
    Forwarder: '0x52A5B179C9beEcBFeB96bA60F618F6691E57eEc2',
    Exchange: '0x2F66A3739ef7b56fDCa0FC7619aAA18f390c96ad',
    DevUtils: '0x86B39D9a45bEE744707E34312A1c2478586BcA93',
    Collections: '0xcEcC2d4E3E6590b9cb9f662f62171f441cbCa40C',
    RoyaltiesManager: '0x96A5429655eddBB2b581cc4F582776813c6895B4',
  },
  1284: {
    NativeERC20: '0xAcc15dC74880C9944775448304B263D191c6077F',
    ERC20Proxy: '0xE05D2BAA855C3dBA7b4762D2f02E9012Fb5F3867',
    ERC721Proxy: '0x2559Be60A7040D645D263cA54c936320f90be74b',
    ERC1155Proxy: '0x295f911ccb8C771593375a4e8969A124bad725d8',
    Forwarder: '0x40fcaa10149821e3522746381cF70468FbA4Db41',
    Exchange: '0xcFB6Ee27d82beb1B0f3aD501B968F01CD7Cc5961',
    DevUtils: '0xA9F9aDD9Ce680611ab3D7d2b5419EeFa29388781',
    Collections: '0x432532427A6131F8189443A9F175FD23f35a5899',
    RoyaltiesManager: '0x10555128238Aaa4762F85B791645843fBFdBbF97',
  },
  1313161554: {
    NativeERC20: '0x8bec47865ade3b172a928df8f990bc7f2a3b9f79',
    ERC20Proxy: '0xE05D2BAA855C3dBA7b4762D2f02E9012Fb5F3867',
    ERC721Proxy: '0x2559Be60A7040D645D263cA54c936320f90be74b',
    ERC1155Proxy: '0x295f911ccb8C771593375a4e8969A124bad725d8',
    Forwarder: false,
    Exchange: '0x3AF5D58120D106A1d97Dd9E90f18F5181D2360ee',
    DevUtils: '0x432532427A6131F8189443A9F175FD23f35a5899',
    Collections: '0xac7F0A410B08D3f0B134C7f48F09863915770FB5',
    RoyaltiesManager: '0x10555128238Aaa4762F85B791645843fBFdBbF97',
  },
  
  // testnets
  4: {
    NativeERC20: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    ERC20Proxy: '0x98Bd7Fda2446cC2A41754F066b64AB2CE1B82A97',
    ERC721Proxy: '0xF2E0FB90Ed39eA0B5279F1CD3db454f5f4D45bcc',
    ERC1155Proxy: '0xC6c9D98eA0DFA65fa47Bf694Fd0A370Be9c4dA9C',
    Forwarder: '0x621B3C076FD38CEc993Da6e4F71e93f57e77FEe5',
    Exchange: '0x9A274BfD093282757ADE4e8115e5F74fBa2E85Bc',
    DevUtils: '0x5C6D0BB47863D1B5Cf5C1A8c311Ea61100FEE08B',
    NFTrade721: '0x9850711Ce724125F0a4730977D4AF16DDBD845D4',
    Collections: '0x8cc87c4c5EA3f95764AF650448656B720f001Aa4',
    RoyaltiesManager: '0x508c3aCfE17b97BB3059858794b6a18C66D6A8a8',
  },
  43113: {
    NativeERC20: '0xd00ae08403b9bbb9124bb305c09058e32c39a48c',
    ERC20Proxy: '0x205a244524F1eDb947B782444Bf87d361F74E612',
    ERC721Proxy: '0x950d3e3975eDcdaBD41c601c3Ac9279302350824',
    ERC1155Proxy: '0x10bC4c31a668c1EDa9d4B1302912e594015D519F',
    Forwarder: '0xAA3d3290fA216369Cd89431109257bb9Ddf40dAe',
    Exchange: '0xA29b1e56Dc2062C2A8C950ac9EFfb8ca2f378A12',
    DevUtils: '0xb6b68C822a23A7C44F3Fd56DD2f300da4b372603',
    Collections: '0x638f984D71C0BB7ebef87e950AD42A30DD46ac41',
    RoyaltiesManager: '0x0435Af303f7205aB1FF5b75309ae0C712ec56965',
  },
};

export default addresses;
