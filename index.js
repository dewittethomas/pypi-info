const fetch = require('node-fetch');

function checkStatus(res) {
    if (res.ok) {
        return res;
    } else {
        return res.statusText;
    }
}

function getPackage(package) {
    return fetch(`https://pypi.org/pypi/${package}/json`)
        .then(res => checkStatus(res))
        .then(res => res.json())
}

module.exports = { getPackage }