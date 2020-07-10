require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain essay hover arctic swift gate'; 
let testAccounts = [
"0x73dd83b5123770fb668c3b8964ee07a0d436b7c145c1b66db5e9a02915b19361",
"0xacf74bebc9b1cde488641dea0977d72fc564b526e759e1412ba56c30aa6f1a26",
"0xf7ffdb2622f7a844e108405eac7534204d49d592a9d9e5a89ce777202c8a4704",
"0x37cecc77677881c1dc21e66b1d4b30eb82f12972f8edfaedd959d4dc3c6cb2f5",
"0x634e3580a4b102b2ea7ce7b1674040c8694644ae66bd71a7dabae98033ec720b",
"0x7e54b71bfba79b055297d552213ed954d2cbcf39efe3d95afef6512fef6f0b50",
"0x8ea9ebaf25220ff03454698ddf9d6d425a220be6143547f9d39186c77b802528",
"0x7d63e69f00866a965524dea0f5e569a5b54b47cb59e0faa134d03e7ef11221d3",
"0x1cd13ef9cc2c01e6f33fefce9fac672f1877834578e2d458af11a7e3d9efec5f",
"0xb2ffc7009bf83c065f8a7a2d523b4431c26275680179c5ccf8752404c890dc00"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
