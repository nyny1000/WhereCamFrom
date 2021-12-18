const HDWalletProvider = require('truffle-hdwallet-provider-klaytn')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0x60b1fd517dece00c1bcb95e9abef2b0512b3c58920886d3acd5b4a13d3d5b11c'

module.exports = {
    networks: {
        klaytn: {
            host: 'https://api.baobab.klaytn.net',
            port: '8651',
            from: PRIVATE_KEY,
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        },
        testnet: {
            provider: ()=> new HDWalletProvider(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        }
    },
}