require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth pizza sniff grace infant bubble slice'; 
let testAccounts = [
"0x1d0cefb4c992afe10dcf72a061afffcb8da08b38105e462bdfd77c141e9a841f",
"0xea30ac39925aa3e246a627857c725c21113c064e864a88771612e5c3c4f950aa",
"0xf7d544e62058d517916b0b489e6b834a78f374465b35264f95cb546fbebb51e9",
"0x0f01e59371973c2ae73afdb430f535f84a1ffc39468d40211522040988abfe13",
"0xbd335a6e08010ea86cfab01f6495aa9f3e60db12979bdf5df72801ce7b364c6b",
"0x56a7b07c8e303b9b7d3eceedb7e69e246567832ce86d32ec494016c1f4e4cfa5",
"0x9c67631388d609388a0acc75338f1d83197b8930da224e84c13c51e8d122bbd5",
"0xda7c562ccc918ea82e071c417c0d342b7a01173d716b4eb76987edc8503e3b2c",
"0x80304ec49aac88a8ab4b6fe249f4b442e185e2e41cd79cf5d20574b03e6c0d40",
"0x91b80d8d4c6cdf2d6b7596435be66729ef002b657a67d4e9719bb4cc4ffc3047"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


