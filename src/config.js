module.exports = {
  api: {
    key: 'MZ4UW331HNIZZGB7SFM7N319NU4XQTICHP', // had trouble figuring how to implement dotenv
    hostname: 'api.etherscan.io',
    path: (address, key) => `/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${key}`
  },
  maxTransactions: 10000
};

// 0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7

// 0xc4D265fF8d9A62c1EF3620E086322a87587953f2 
// 0xB8fc54824f9113d541e74765E4088FB6A8D29AA5 