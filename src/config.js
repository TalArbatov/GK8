module.exports = {
  api: {
    key: 'MZ4UW331HNIZZGB7SFM7N319NU4XQTICHP',
    address: '0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a',
    url: (address, key) => `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${key}`
  }
};

