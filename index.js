const fetch = require('node-fetch');

module.exports = function getPackage(package) {
    const res = await fetch(`https://pypi.org/pypi/${package}/json`);
    return res.json().info;
};