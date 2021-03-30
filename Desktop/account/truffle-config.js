const PrivateKeyProvider = require("truffle-hdwallet-provider");
const privateKey = "0xf79de4bc89ef5bae87286011dee2a3c162b9e1ec3df7867edcc48b338eb791c0";
const privateKeyProvider = new PrivateKeyProvider(privateKey, "http://localhost:8545");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    besuWallet: {
      provider: privateKeyProvider,
      network_id: "*"
    },
  }
};