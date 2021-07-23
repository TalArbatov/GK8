module.exports = {
  api: {
    key: 'MZ4UW331HNIZZGB7SFM7N319NU4XQTICHP', // had trouble figuring how to implement dotenv
    hostname: 'api.etherscan.io',
    path: (address, key) => `/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${key}`
  },
  maxTransactions: 10000
};
