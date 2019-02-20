module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 600000,
      network_id: "*" // Match any network id
    }
  }
};
