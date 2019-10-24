const fetch = require('node-fetch');

module.exports = async function(package) {
    const res = await fetch(`https://pypi.org/pypi/${package}/json`);
    return res.json();
};